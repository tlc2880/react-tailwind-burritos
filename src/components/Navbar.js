import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'

function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false)
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

  return (
    <div className='bg-teal-700 text-white sticky top-0 z-10'> 
      <nav className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
        <h1 className='text-5xl logo'><a href="#hero">🌯 Great Burritos</a></h1>
        <ul className='hidden  md:flex gap-6'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/ourburritos'><li>OurBurritos</li></Link>
          <Link to='/reviews'><li>Reviews</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          <Link to='/legal'><li>Legal</li></Link>
        </ul>
        {/* Hamburger or Close Icon */}
        <div className=' md:hidden z-10' onClick={handleClick}>
          {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
        </div>
        {/* Mobile Menu */}
        <ul
          className={`${
            nav
              ? 'text-white opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-y-full'
          } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
          onClick={() => setNav(false)}
        >
          <Link to='/'><li className='hover:text-teal-700'>Home</li></Link>
          <Link to='/ourburritos'><li className='hover:text-teal-700'>OurBurritos</li></Link>
          <Link to='/reviews'><li className='hover:text-teal-700'>Reviews</li></Link>
          <Link to='/contact'><li className='hover:text-teal-700'>Contact</li></Link>
          <Link to='/legal'><li className='hover:text-teal-700'>Legal</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
