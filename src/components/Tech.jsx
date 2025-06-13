import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <section className="flex flex-col items-center">
      <motion.div
        className="text-center mb-10"
        variants={textVariant(0.1)} // Apply textVariant with a delay of 0.1 seconds
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // Ensure the animation only plays once
      >
        <motion.p variants={textVariant(0.2)} className={styles.sectionSubText}>My skills</motion.p>
        <motion.h2 variants={textVariant(0.3)} className={styles.sectionHeadText}>Tech Stack.</motion.h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div
            className='relative w-28 h-28 p-1 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group'
            key={technology.name}
          >
            <div className='absolute -inset-1 bg-purple-500/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
            <div className='relative w-full h-full p-2 bg-[#1d1836] rounded-full'>
              <motion.div
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='w-full h-full'
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
