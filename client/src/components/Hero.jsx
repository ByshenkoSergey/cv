import React from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";

import { styles } from "../styles";
import { photo } from "../assets";
import { fadeIn } from "../utils/motion";
import { softSkills } from "../constants";

const SoftSkillCard = ({ index, title, icon }) => (
  <Tilt className='sm:w-[200px] w-[150px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='sm:w-[200px] w-[150px] sm:h-[200px] h-[150px] 
      green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='soft-skill'
          className='w-[60px] h-[60px] object-contain'
        />

        <h3 className={`${styles.paddingX} text-center text-secondary sm:text-[19px]`}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Hero = () => {
  return (
    <section className={`relative w-full h-screen sm:top-[100px] top-[70px]`}>
      <div
        className={`max-w-5xl mx-auto ${styles.paddingX} 
        flex flex-row items-start justify-center sm:gap-10 gap-1`}
      >
        <div
            className='w-[120px] sm:w-[220px] white-pink-gradient p-[1px] sm:mt-5 mt-0 mx-auto 
            rounded-[20px] shadow-card'
          >
            <div
            className=" bg-tertiary w-full rounded-[20px] overflow-hidden"
            >
              <img src={photo} alt='photo' className='w-full object-contain' />
            </div>
        </div>
        
        <div className='flex flex-row sm:gap-10 gap-5 '>
          <div 
          className='flex flex-col items-center mt-0  sm:mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-[130px] sm:h-[290px] violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Serhii</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              I develop web applications <br/>
              and user interfaces
            </p>
          </div>
        </div>
      </div>

      <div
        className={`max-w-5xl mx-auto mt-4 xs:mt-0 ${styles.paddingX} flex flex-col
        indent-8 text-justify `}
      >
        <p className={`${styles.sectionSubText}`} >
          I'm a skilled software developer with experience in C# and
          JavaScript as well as expertise in frameworks like .NET, React and
          Three.js. Also I have experience with AWS services like Lambda, EC2, 
          SQS, SNS, EventBridge and sort like that.
        </p>
        <p className={`${styles.sectionSubText} mt-5`} >
          I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems.
        </p>
        <p className={`${styles.sectionSubText} mt-5`} >
          That`s my professional approach:
        </p>
      </div>
      
      <div >
        <div className=' sm:mt-8 mt-5 max-w-4xl mx-auto flex flex-wrap justify-center gap-5'>
          {softSkills.map((softSkill, index) => (
            <SoftSkillCard key={softSkill.title} index={index} {...softSkill} />
          ))}
        </div>
      </div>

      <div className={`mx-auto ${styles.paddingX} flex flex-row justify-center max-w-5xl`}>
        <p className={`${styles.heroSubText} sm:mt-10 mt-7 indent-8 text-white`} >
          So, let's work together to bring your ideas to life!
        </p>
      </div>

      <div className='absolute bottom-auto sm:mt-5 mt-2 w-full flex justify-center items-center opacity-20'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
            flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>

    </section>
  );
};

export default Hero;