import React from 'react'
import { Link } from 'react-router-dom';
import NavbarButton from '../components/ui/NavbarButton';

const Navbar = () => {


  return (
    <nav className='bg-spaceCadet px-40 py-12'>
      <div className="flex items-center justify-between ">

        <div className='flex space-x-2'>
          <img src="./logo.png" alt="Radiant's logo" className='h-20' />
          <Link to='/'>
          <div className='flex flex-col'>
            <span className="text-5xl font-bold text-azure tracking-wide">Radiant</span>
            <span className='text-3xl font-medium text-white'>Dental Studio</span>
          </div>
          </Link>
        </div>

        <div className='flex'>
          <ul className='flex justify-evenly text-2xl text-spanishBlue '>
            <li className='p-4 hover:underline'><Link to='/services'>Services</Link></li>
            <li className='p-4 hover:underline'><Link to='/about'>About Us</Link></li>
            <li className='p-4 hover:underline'><Link to='/team'>Our Team</Link></li>
            <li className='p-4 hover:underline'><Link to='/reviews'>Testimonials</Link></li>
            <li className='p-4 hover:underline'><Link to='/contact'>Contact us</Link></li>
            
          </ul>        
          <NavbarButton>
            book online
          </NavbarButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar