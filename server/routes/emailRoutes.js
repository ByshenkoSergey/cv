import express from 'express';
import * as dotenv from 'dotenv';
import emailjs from "@emailjs/nodejs";

dotenv.config();

const router = express.Router();

emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
    blockHeadless: true,
    blockList: {
      list: [],
      watchVariable: '',
    },
    limitRate: {
      throttle: 10000,
    },
  });

router.route('/').post(async (req, res) => {
   const { from_name, from_email, message } = req.body;
      var templateParams = {
        from_name: from_name,
        to_name: process.env.ADDRESSEE_NAME,
        from_email: from_email,
        to_email: process.env.ADDRESSEE_EMAIL,
        message: message
      };
      
      emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        ).then(
            (response) =>{
                console.log('SUCCESS!', response.status, response.text);
                res.status(200).send(response.text);
            },
            (error) => {
                console.log('FAILED...', error);
                res.status(500).send(error?.message || 'Something went wrong');
            }
        );
    }
);
  

export default router;
