import React from 'react';
import { ViewBook } from '../components/canvas';
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { styles } from '../style';
// import { btclogo, github } from "../assets";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    link,
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(link)
  }

    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
        >
          <div className='relative w-full h-[230px] '>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => handleNext()}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                {/* <img
                  src={btclogo}
                  alt='source code'
                  className='w-full h-full object-contain'
                /> */}
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
};

const Sektor = () => {
  return (
    <div className='mt-20 w-full relative bg-Modul-pattern bg-cover bg-no-repeat bg-center'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between h-full px-8'>
        {/* Left Column */}
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className='text-6xl font-bold gradient-text8 italic mt-4 text-center lg:text-left'>
            Jenis-jenis <br /> <span className='ml-7'>Cryptocurrency</span>
          </h1>
          <div className='h-[290px] w-[500px] mt-4 -ml-4 items-center justify-center'>
            <ViewBook />
          </div>
          <p className='text-2xl mt-4 font-semibold w-full lg:w-[550px] text-center lg:text-left'>
         
          </p>
        </div>

        {/* Right Column */}
        <div className='flex flex-row mt-10 lg:mt-0'>
          <div className='text-center text-6xl text-white opacity-10 blur-sm animate-blink mt-4 -ml-80'>
            {['B', 'E', 'L', 'A', 'J', 'A', 'R'].map((letter, index) => (
              <div key={index}>{letter}</div>
            ))}
          </div>
          <div className='text-center text-6xl text-white opacity-10 blur-sm animate-blink mt-32 ml-6'>
            {['C', 'R', 'Y', 'P', 'T', 'O'].map((letter, index) => (
              <div key={index}>{letter}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className='mt-20 px-8'>
        <motion.div variants={textVariant()} className='text-center'>
          <p className={`${styles.sectionSubText}`}>Materi</p>
          <h2 className={`${styles.sectionHeadText} mt-4`}>Jenis-jenis Crypto</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
        >
          Berikut ini adalah beberapa Materi tentang jenis-jenis cryptocurrency yang bisa anda pelajari :
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sektor;
