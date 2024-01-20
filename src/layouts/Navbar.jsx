import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='bg-spaceCadet px-40 py-12'>
      <div className="flex items-center justify-between ">

        <div className='flex space-x-2'>
          <img src="./logo.png" alt="Radiant's logo" className='h-20' />
          <div className='flex flex-col'>
            <span className="text-5xl font-bold text-azure tracking-wide">Radiant</span>
            <span className='text-3xl font-medium text-white'>Dental Studio</span>
          </div>
        </div>

        <div className="flex flex-col relative">

        <div className='flex'>
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
       
      </div>
        <button className='transparent-btn hover:text-white hover:bg-azure px-10 py-4 ml-5'
            onClick={scrollToTop}>
            book online
          </button>
      </div> 
    </nav>
  );
};

export default Navbar;
