import React, {useState} from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({
  index,
  name,
  description,
  type,
  image_top,
  image_bottom,
  degree,
}) => {
  const [image, setImage] = useState(image_top);
  const [isBottom, setIsBottom] = useState(false);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[530px]'
        >
            <div
            onClick={() => {
                isBottom ? setImage(image_top): setImage(image_bottom);
                setIsBottom(!isBottom);
            }} 
            className='w-full h-[230px] hover:scale-150' >
                <img
                    src={image}
                    alt='diploma_image'
                    className='w-full h-full object-contain rounded-2xl cursor-pointer'
                />
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]' >
                    {name}
                </h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

        </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This is my education that helped me become who I am now 
          and gave me the opportunity to do what I really love! 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {education.map((educationUnit, index) => (
          <EducationCard key={`educationUnit-${index}`} index={index} {...educationUnit} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");