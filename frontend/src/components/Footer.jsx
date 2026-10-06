import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import User1 from '../assets/User1.jpg'
import User2 from '../assets/User2.jpg'
import User3 from '../assets/User3.jpg'
import User4 from '../assets/User4.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='max-w-full font-[Poppins] max-h-screen'>
        <div className='bg-blue-950 text-white flex justify-around items-start h-100'>
            <div className='flex flex-col items-center mt-10'>
            <h1 className='text-2xl font-semibold mb-5'>Quick Link</h1>
            <ul className='space-y-2'>
                <li>
                    <Link to="/about" className='flex items-center gap-2'>
                        <span className='text-xl'>›</span>
                        <h1 className='hover:scale-105 transition-all'> About Us</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/course" className='flex items-center gap-2'>
                        <span className='text-xl'>›</span> 
                        <h1 className='hover:scale-105 transition-all'>Course</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className='flex items-center gap-2'>
                        <span className='text-xl'>›</span> 
                        <h1 className='hover:scale-105 transition-all'>Contact Us</h1>
                    </Link>
                </li>
                  <li>
                    <Link to="#" className='flex items-center gap-2'>
                        <span className='text-xl'>›</span> 
                        <h1 className='hover:scale-105 transition-all'>Privacy Policy</h1>
                    </Link>
                </li>
                 <li>
                    <Link to="#" className='flex items-center gap-2'>
                        <span className='text-xl'>›</span> 
                        <h1 className='hover:scale-105 transition-all'>FAQ and Help</h1>
                    </Link>
                </li>
            </ul>
            </div>
            <div className='flex flex-col items-start mt-10'>
                <h1 className='text-2xl mb-5 font-semibold'>Contact</h1>
                <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                    <FaLocationDot size={25}/>
                    <h1 className=''>123 Street, New York, USA</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <FaPhoneAlt size={25}/>
                    <h1 className=''>+012 345 67890</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <FaEnvelope size={25}/>
                    <h1 className=''>info@example.com</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='rounded-full border border-white px-3 py-3'>
                        <FaTwitter size={20} className='text-white' />
                    </div>
                     <div className='rounded-full border border-white px-3 py-3'>
                        <FaFacebook size={20} className='text-white' />
                    </div>
                     <div className='rounded-full border border-white px-3 py-3'>
                        <FaYoutube size={20} className='text-white' />
                    </div>
                     <div className='rounded-full border border-white px-3 py-3'>
                        <FaInstagram size={20} className='text-white' />
                    </div>
                </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-2xl font-semibold'>Gallery</h1>
                <div className='grid grid-cols-2 items-center gap-2 pt-5'>
                    <img src={User1} alt="" className='w-30 h-25'/>
                    <img src={User2} alt="" className='w-30 h-25'/>
                    <img src={User3} alt="" className='w-30 h-25'/>
                    <img src={User4} alt="" className='w-30 h-25'/>
                </div>
            </div>
            <div className='flex flex-col items-start mt-10 space-y-5 w-[20%]'>
                <h1 className='text-2xl font-semibold'>Newsletter</h1>
                <p className='text-gray-300'>
                    Dolor amet sit justo amet elitr clita ipsum elitr est.
                    </p>
                    <div className='flex items-center'>
                        <input type="email" 
                    placeholder='Enter Your Email' 
                    className='border border-gray-300 px-2 py-3' />
                    <button className='bg-sky-400 py-3 px-4 border border-sky-300'>
                        Send
                    </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer