import React from 'react'
import HomeImage from '../assets/Home.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Banner({ title }) {
    return (
        <div className='max-w-full max-h-screen font-[poppins]'>
            <div style={{
                backgroundImage: `linear-gradient(rgba(24, 29, 57, 0.7),rgba(24, 29, 56, 0.6)),url(${HomeImage})`,
                backgroundPosition: 'cover',
                width: '100%',
                height: '70vh'
            }}>
                    <motion.h1 
                    initial={{opacity:0, y: -40}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8, delay:0.2}}
                    className='text-5xl font-semibold text-white text-center pt-40'>
                        {title}
                        </motion.h1>
                        <div className='flex items-center justify-center py-5 gap-3 text-white'>
                            <Link to='/about'>
                            <h1 className='text-white text-xl'>About</h1>
                            </Link>
                            /
                             <Link to='/course'>
                            <h1 className='text-white text-xl'>Course</h1>
                            </Link>
                            /
                             <Link to='/contact'>
                            <h1 className='text-white text-xl'>Contact</h1>
                            </Link>
                        </div>
            </div>
        </div>
    )
}

export default Banner