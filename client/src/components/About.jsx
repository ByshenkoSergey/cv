import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About my technical skills</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-10 mb-10 flex flex-wrap gap-10 max-w-5xl justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.p
        variants={fadeIn("left", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] indent-8 text-justify'
      >
        I have strong knowlage about Object Oriented Programming and SOLID principles. In my work process
        I often use Patterns of programming as well as Test Driven Development. My experience includes 
        work with .Net Core, .Net 7, React, Angular frameworks. AWS services like Lambda, StepFunction,
        Dynamo db, SQS, SNS, ES2 etc as well. Also I have got good experience with Terraform when I worked 
        with AWS services.  
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
   </>
  );
};

export default SectionWrapper(About, "about");