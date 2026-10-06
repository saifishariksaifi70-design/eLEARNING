import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/Home.jpg'
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })
  const handleChane = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
             "Content-Type": "application/json"
           },
          body: JSON.stringify(formData)
        })
        
        const data = await res.json({
           message: "Contact saved successfully"
        })
        alert(data.message)

        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''

        })

      } catch (error) {
        console.log(error)

      }
    }
  return (
    <div className='max-w-full bg-white mt-1 min-h-screen font-[Poppins]'>
      <Banner title="Contact" />
      <div className='mt-10'>
        <h1 className='text-center text-2xl text-sky-400'>Contact Us</h1>
        <h1 className='text-center text-5xl'>Contact For Any Query</h1>
      </div><br /><br />
      <div className='flex justify-center items-start gap-10 mx-10 my-10'>
        <div className='flex flex-col items-start space-y-3 w-4xl px-5'>
          <h1 className='text-xl font-semibold'>Get In Touch</h1>
          <p className='text-gray-500'>The contact form is currently inactive.
            Get a functional and working contact form with Ajax & PHP in a few minutes.
            Just copy and paste the files, add a little code and you're done. Download Now.
          </p><br />
          <div className='flex gap-4 items-center'>
            <FaLocationDot size={50} className='bg-sky-400 text-white py-2' />
            <div>
              <h1 className='text-sky-500 text-xl'>Office</h1>
              <p className='text-gray-500'>123 Street, New York, USA</p>
            </div>
          </div><br />
          <div className='flex gap-4 items-center'>
            <FaPhone size={50} className='bg-sky-400 text-white py-2' />
            <div>
              <h1 className='text-sky-500 text-xl'>Mobile</h1>
              <p className='text-gray-500'>+ 0124-4510-10</p>
            </div>
          </div><br />
          <div className='flex gap-4 items-center'>
            <FaEnvelope size={50} className='bg-sky-400 text-white py-2' />
            <div>
              <h1 className='text-sky-500 text-xl'>Email</h1>
              <p className='text-gray-500'>info@example.com</p>
            </div>
          </div>

        </div>
        <div className='flex flex-col items-start w-7xl'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715126.0068986714!2d-75.77004055!3d42.7462195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e1!3m2!1sen!2sin!4v1791132938722!5m2!1sen!2sin"
            className='w-full border h-[450px]'
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin">

          </iframe>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-start justify-center'>
          <div className='flex gap-5'>
            <input type="text" placeholder='Your Name'
            name='name'
            value={formData.name}
            onChange={handleChane}
              className='border border-gray-500 px-2 py-3 focus:ring-sky-500 outline-sky-500' />
            <input type="tel" placeholder='Your Number'
            name='number'
            value={formData.number}
            onChange={handleChane}
              className='border border-gray-500 px-2 py-3 focus:ring-sky-500 outline-sky-500' />
          </div><br />
          <input type="email" placeholder='Your Email'
          name='email'
          value={formData.email}
          onChange={handleChane}
            className='border border-gray-500 w-full py-3 px-2 focus:ring-sky-500 outline-sky-500' /><br />
          <textarea placeholder='message' 
          name='message'
          value={formData.message}
          onChange={handleChane}
          className='border border-gray-500 w-full h-60 px-2 focus:ring-sky-500 outline-sky-500'>

          </textarea><br />
          <button type='submit' className='bg-sky-300 w-full flex items-center justify-center gap-5 rounded-2xl py-3'>
            <IoSend size={20} className='text-white' />
            <h1>Send</h1>
          </button>
        </div>
        </form>

      </div>
    </div>
  )
}

export default Contact