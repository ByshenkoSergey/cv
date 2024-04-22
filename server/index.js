import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import emailRoutes from './routes/emailRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/email', emailRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from Backend!',
    });
  });

  const startServer = async () => {
    try {
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };

  startServer();
  