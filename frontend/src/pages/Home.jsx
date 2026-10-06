import React from 'react'
import HomeImage from '../assets/Home.jpg'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from 'react-icons/fa'
import About from './About'
import Course from './Course'
import Contact from './Contact'
import AboutContent from '../components/AboutContent'
import CourseContent from '../components/CourseContent'
import ContactContent from '../components/ContactContent'


function Home() {
  return (
    <div className='max-w-full md:w-full min-h-screen'>
      <div style={{
        backgroundImage: `linear-gradient(rgba(24, 29, 57, 0.7),rgba(24, 29, 56, 0.6)), url(${HomeImage})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh'
      }}>
        <div className='w-full h-full bg-black/50'>
          <div className='px-8 md:px-16 pt-40 text-white'>
            <p className='text-sky-400 text-xl font-semibold'>BEST ONLINE COURSES</p>
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, scale: 0.7 }}
               viewport={{ once: true }}
              className='text-5xl font-bold max-w-3xl leading-tight'>
              The Best online Learning platform
            </motion.h1>
            <p className="text-lg md:text-xl mt-6 max-w-4xl leading-relaxed">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus
              eirmod elitr.
            </p><br /><br />
            <div className='flex items-center gap-8'>
              <motion.button 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, scale: 0.7 }}
               viewport={{ once: true }}
              className='bg-sky-400 px-15 py-4 '>
                Read More
              </motion.button>
              <motion.button 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
               viewport={{ once: true }}
              className='bg-white text-black px-15 py-4 '>
                Read More
              </motion.button>
            </div>
          </div>
        </div>

      </div>
      <br /><br />
      <div className='flex justify-around items-center gap-8 w-full px-10'>
        <motion.div 
        initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.2,}}
         viewport={{ once: true }}
        className='flex flex-col items-center justify-center px-5 py-10 text-center bg-[#F0FBFC] hover:bg-sky-200 transition-all'>
          <FaGraduationCap size={100} className='text-[#06BBCC]'/>
          <h1 className='text-xl font-semibold text-center'>Skills Instructors</h1>
          <p className='text-gray-500 text-center'>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
          </p>
        </motion.div>
        <motion.div 
         initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.4,}}
         viewport={{ once: true }}
        className='flex flex-col items-center justify-center px-5 py-10 text-center bg-[#F0FBFC] hover:bg-sky-200 transition-all'>
          <FaGlobe size={100} className='text-[#06BBCC] py-3'/>
          <h1 className='text-xl font-semibold text-center'>Online Classes</h1>
          <p className='text-gray-500 text-center'>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
          </p>
        </motion.div>
        
        <motion.div 
         initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5, delay: 0.6,}}
         viewport={{ once: true }}
        className='flex flex-col items-center justify-center px-5 py-10 text-center bg-[#F0FBFC] hover:bg-sky-200 transition-all'>
          <FaHome size={100} className='text-[#06BBCC]'/>
          <h1 className='text-xl font-semibold text-center'>Home Projects</h1>
          <p className='text-gray-500 text-center'>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
          </p>
        </motion.div>
        <motion.div 
         initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.8}}
         viewport={{ once: true }}
        className='flex flex-col items-center justify-center px-5 py-10 text-center bg-[#F0FBFC] hover:bg-sky-200 transition-all'>
          <FaBookOpen size={100} className='text-[#06BBCC]'/>
          <h1 className='text-xl font-semibold text-center'>Book Library</h1>
          <p className='text-gray-500 text-center'>
           Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
          </p>
        </motion.div>
      </div>
      <br /><br />
      <AboutContent />
      <CourseContent />
      <ContactContent />
    </div>
  )
}

export default Home