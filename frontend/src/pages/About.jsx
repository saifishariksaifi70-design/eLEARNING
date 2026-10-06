import React from 'react'
import AboutImage from '../assets/About.jpg'
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import User1 from '../assets/User1.jpg'
import User2 from '../assets/User2.jpg'
import User3 from '../assets/User3.jpg'
import User4 from '../assets/User4.jpg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/Home.jpg'

function About() {
  return (
    <div className='max-w-full bg-white'>
      <Banner title="About" />
      <div className='flex justify-center gap-10 max-h-screen my-10'>
        <motion.div 
         initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
               viewport={{ once: true }}
        className=''>
          <img src={AboutImage} alt="" className='w-2xl h-130' />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
               viewport={{ once: true }}
        className='flex flex-col items-start w-2xl px-10'>
          <p className='text-sky-300 text-2xl font-semibold'>About Us</p>
          <h1 className='text-5xl font-semibold'>Welcome to</h1>
          <h1 className='text-5xl font-semibold'>eLEARNING</h1> <br />
          <p className='text-gray-500'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p><br />
          <p className='text-gray-500'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p> <br />
          <div className='grid grid-cols-2 gap-x-15 gap-y-2'>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>Skilled Instructors</h1>
            </div>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>Online Classes</h1>
            </div>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>International Certificate</h1>
            </div>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>Skilled Instructors</h1>
            </div>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>Online Classes</h1>
            </div>
            <div className='flex items-center gap-2'>
              <FaArrowRight className='text-sky-300' size={20}/>
              <h1 className='text-gray-500 text-lg'>International Certificate</h1>
            </div>
          </div><br />
          <button className='bg-[#06BBCC] px-15 py-5 text-white'>
            Read More
          </button>
        </motion.div>
      </div><br />
      <div className='flex justify-around items-center gap-5 mx-5 my-10'>
      <motion.div 
       initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.2,}}
         viewport={{ once: true }}
      className='flex flex-col items-center justify-center bg-gray-50 relative pb-5'>
        <img src={User1} alt="" className='w-70 h-60 hover:scale-105 transition-all'/>
        <div className='flex items-center gap-5 absolute top-55'>
          <div className='bg-[#06BBCC] '>
          <FaFacebook size={35} className='px-2 py-1 text-white'/>
        </div>
        <div className='bg-[#06BBCC]'>
          <FaTwitter size={35} className='px-2 py-1 text-white'/>
        </div>
         <div className='bg-[#06BBCC]'>
          <FaInstagram size={35} className='px-2 py-1 text-white'/>
        </div>
        </div>
        <br />
        <h1 className='text-3xl'>Instructor Name</h1>
        <p className='text-gray-500'>Designation</p>
      </motion.div>
       <motion.div 
        initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.6,}}
         viewport={{ once: true }}
       className='flex flex-col items-center justify-center bg-gray-50 relative pb-5'>
        <img src={User2} alt="" className='w-70 h-60 hover:scale-105 transition-all'/>
        <div className='flex items-center gap-5 absolute top-55'>
          <div className='bg-[#06BBCC] '>
          <FaFacebook size={35} className='px-2 py-1 text-white'/>
        </div>
        <div className='bg-[#06BBCC]'>
          <FaTwitter size={35} className='px-2 py-1 text-white'/>
        </div>
         <div className='bg-[#06BBCC]'>
          <FaInstagram size={35} className='px-2 py-1 text-white'/>
        </div>
        </div>
        <br />
        <h1 className='text-3xl'>Instructor Name</h1>
        <p className='text-gray-500'>Designation</p>
      </motion.div>
       <motion.div 
        initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 0.9,}}
         viewport={{ once: true }}
       className='flex flex-col items-center justify-center bg-gray-50 relative pb-5'>
        <img src={User3} alt="" className='w-70 h-60 hover:scale-105 transition-all'/>
        <div className='flex items-center gap-5 absolute top-55'>
          <div className='bg-[#06BBCC] '>
          <FaFacebook size={35} className='px-2 py-1 text-white'/>
        </div>
        <div className='bg-[#06BBCC]'>
          <FaTwitter size={35} className='px-2 py-1 text-white'/>
        </div>
         <div className='bg-[#06BBCC]'>
          <FaInstagram size={35} className='px-2 py-1 text-white'/>
        </div>
        </div>
        <br />
        <h1 className='text-3xl'>Instructor Name</h1>
        <p className='text-gray-500'>Designation</p>
      </motion.div>
       <motion.div 
        initial={{ opacity:0, y: 20}}
        whileInView={{ opacity:1, y: 0}}
        transition={{duration: 0.5,delay: 1.2,}}
         viewport={{ once: true }}
       className='flex flex-col items-center justify-center bg-gray-50 relative pb-5'>
        <img src={User4} alt="" className='w-70 h-60 hover:scale-105 transition-all'/>
        <div className='flex items-center gap-5 absolute top-55'>
          <div className='bg-[#06BBCC] '>
          <FaFacebook size={35} className='px-2 py-1 text-white'/>
        </div>
        <div className='bg-[#06BBCC]'>
          <FaTwitter size={35} className='px-2 py-1 text-white'/>
        </div>
         <div className='bg-[#06BBCC]'>
          <FaInstagram size={35} className='px-2 py-1 text-white'/>
        </div>
        </div>
        <br />
        <h1 className='text-3xl'>Instructor Name</h1>
        <p className='text-gray-500'>Designation</p>
      </motion.div>
      </div>
    </div>
  )
}

export default About