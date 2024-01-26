import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Submenu = () => {
    return (
        <article className='xl:hidden space-y-1 pb-3 border-t py-3 pt-3 relative'>
            <ul className=''>
              <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='about' smooth={true} duration={500}>
                  About Us
                </ScrollLink>
              </li>

            <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='services' smooth={true} duration={500}>
                    Services
                </ScrollLink>
              </li>
                
              <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='team' smooth={true} duration={500}>
                  Our Team
                </ScrollLink>
              </li>

              <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='reviews' smooth={true} duration={500}>
                  Testimonials
                </ScrollLink>
              </li>

              <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='faq' smooth={true} duration={500}>
                  FAQs
                </ScrollLink>
              </li>

              <li className='block px-3 py-2 rounded-md 
                  bg-spanishBlue text-spaceCadet font-medium'>
                <ScrollLink to='contact' smooth={true} duration={500}>
                  Contact us
                </ScrollLink>
              </li>
            </ul>
          </article>
    )
}

export default Submenu