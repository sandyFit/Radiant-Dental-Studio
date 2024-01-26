import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Submenu from '../components/ui/Submenu';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
        <div className="hidden 2xl:flex flex-col relative">
           <ul className="ul">
              
            <li className='nav-link'>
              <ScrollLink to='about' smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>

           <li className='nav-link'>
              <ScrollLink to='services' smooth={true} duration={500}>
                  Services
              </ScrollLink>
            </li>
              
            <li className='nav-link'>
              <ScrollLink to='team' smooth={true} duration={500}>
                Our Team
              </ScrollLink>
            </li>

            <li className='nav-link'>
              <ScrollLink to='reviews' smooth={true} duration={500}>
                Testimonials
              </ScrollLink>
            </li>

            <li className='nav-link'>
              <ScrollLink to='faq' smooth={true} duration={500}>
                FAQs
              </ScrollLink>
            </li>

            <li className='nav-link'>
              <ScrollLink to='contact' smooth={true} duration={500}>
                Contact us
              </ScrollLink>
            </li>
          </ul>        
       
      </div>
        <button className='hidden 2xl:block transparent-btn hover:text-white hover:bg-azure px-10 py-4 ml-5 '
          onClick={scrollToTop}>
          book online
        </button>

        {/* Mobile */}

        {/* Mobile button container */}
        <div className="xl:hidden space-y-4">
          <button className="rounded p-1 text-spanishBlue border-2 border-spanishBlue hover:bg-cyan-400 
                  hover:text-zinc-50 transition-colors focus:ring-2 focus:ring-slate-400"
            onClick={handleClick}
          >
            {click ? <MenuIcon /> : <Close />}
          </button>

          <Submenu/>
          
        </div>
        

      </div> 
    </nav>
  );
};

export default Navbar;
