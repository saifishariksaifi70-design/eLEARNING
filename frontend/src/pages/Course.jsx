import React from 'react'
import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import Testimonial from '../components/Testimonial'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/Home.jpg'
import { motion } from 'framer-motion'

function Course() {
  return (
    <div className='max-w-full'>
      <Banner title="Course" />
      <h1 className='text-sky-300 text-xl text-center mt-10'>CATEGORY</h1>
      <h1 className='text-5xl font-semibold text-center'>Courses Categories</h1><br /><br />  
      <div className='flex justify-center items-center gap-5 w-full'>
        <div className='space-y-3 w-3xl'>
          <div className='relative'>
          <img src={course1} alt="" className='h-90 hover:scale-105 transition-all'/>
          <button className='bg-white px-8 py-3 absolute top-70 right-2'>
            <h1 className='text-xl'>Web Design</h1>
            <p className='text-sky-300'>49 course</p>
          </button>
        </div>
        <div className='flex gap-5 relative '>
        <img src={course2} alt="" className='w-3xl h-60 hover:scale-105 transition-all' />
        <button className='bg-white px-3 py-3 absolute top-40 right-145'>
            <h1 className='text-xl font-semibold'>Graphic Design</h1>
            <p className='text-sky-300'>49 course</p>
          </button>
        <img src={course3} alt="" className='h-60 hover:scale-105 transition-all' />
        <button className='bg-white px-3 py-3 absolute top-40 right-1'>
            <h1 className='text-xl font-semibold'>Video Editing</h1>
            <p className='text-sky-300'>49 course</p>
          </button>
        </div>
        </div>
        <div className='relative hover:scale-105 transition-all'>
          <img src={course4} alt=""className='h-153'/>
          <button className='bg-white px-3 py-3 absolute bottom-1 right-1'>
            <h1 className='text-xl font-semibold'>Digital Marketing</h1>
            <p className='text-sky-300'>49 course</p>
          </button>
        </div>
      </div>
      <Testimonial />
      
    </div>
  )
}

export default Course