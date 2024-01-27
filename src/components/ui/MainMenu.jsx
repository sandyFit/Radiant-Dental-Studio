import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const MainMenu = () => {
    return (
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
    )
}

export default MainMenu;
