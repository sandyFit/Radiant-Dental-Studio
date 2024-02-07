
import React from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('sign-up');
  }

  return (
    <nav className='bg-spaceCadet py-12 '>
      <div className="flex items-center justify-between mx-8 md:mx-24 lg:mx-36 xl:mx-44">

        <div className='flex space-x-2'>
          <img src="./logo.png" alt="Radiant's logo" className='h-16' />
          <div className='flex flex-col'>
            <span className="text-4xl font-bold text-azure tracking-wide">Radiant</span>
            <span className='text-2xl font-medium text-white'>Dental Studio</span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden 2xl:flex flex-col relative text-base lg:text-lg xl:text-xl">
           <MainMenu/>  
        </div>

        <button
          className='hidden 2xl:block transparent-btn hover:text-white hover:bg-azure px-10 py-4 ml-5'
          onClick={handleClick}
        >
          book online
        </button>

        {/* Mobile */}

          <Submenu />
          
        </div>
         
    </nav>
  );
};

export default Navbar;
