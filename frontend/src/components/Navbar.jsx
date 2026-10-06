import React from 'react'
import { SiGreatlearning } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='max-w-full h-auto'>
            <div className='bg-white flex items-center justify-between'>
                <div className='flex items-center gap-3 ml-10'>
                    <SiGreatlearning size={25} className='text-sky-500 font-bold' />
                    <h1 className='text-4xl text-sky-400 font-bold'>eLEARING</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <ul className="flex items-center gap-10 text-md">
                        <Link to='/'>
                        <li>Home</li>
                        </Link>

                        <Link to='/about'>
                        <li>About</li>
                        </Link>

                        <Link to='/course'>
                        <li>Course</li>
                        </Link>

                         <Link to='/contact'>
                        <li>Contact</li>
                        </Link>
                    </ul>
                    <button className='bg-sky-500 px-4 py-2 text-md font-bold text-white w-50 h-15 flex items-center justify-center gap-2'>
                        <h1>Join Now</h1>
                        <FaArrowRight size={20} className='items-center' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar