import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myImage from '../assets/taitil.png'; // Adjust the path as needed
import resume from '../assets/resume.pdf'; // Import your resume file here

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex items-center gap-4 md:gap-40 lg:gap-80'> {/* Responsive gap */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Taitil</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I teach machines to learn, <br className='sm:block hidden' />
              Develop AI & ML models.
            </p>
          </div>
          
          {/* Responsive image with appear and scale animation */}
          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }} // Start with invisible and smaller scale
              animate={{ opacity: 1, scale: [0.2, 1.25, 1] }} // Animate to full opacity and scale
              transition={{ 
                duration: 1.1,             // Duration of the animation
                ease: "easeOut"           // Smooth easing
              }}
              className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#915EFF]'
            >
              <img
                src={myImage}
                alt="Taitil"
                className='w-full h-full object-cover'
              />
            </motion.div>
          </div>
        </div>
      </div>

      <ComputersCanvas />
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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
