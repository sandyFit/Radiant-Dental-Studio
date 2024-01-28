import { Call, Close, Group, Info, LiveHelp, LocalHospitalRounded, Reviews } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Submenu = () => {  

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    }


    return (
        <article className='xl:hidden relative space-y-8 p-6'>
            <button className="rounded p-1 text-spanishBlue border-2 border-spanishBlue hover:bg-cyan-400 
                  hover:text-zinc-50 transition-colors focus:ring-2 focus:ring-slate-400"
                onClick={toggleSubMenu}
            >
                {isSubmenuOpen ? <Close /> : <MenuIcon />}
            </button>
            
            <ul className={` bg-spanishBlue w-[18rem] h-auto duration-500 space-y-auto pl-6 pt-12 pb-16
                absolute right-6 z-50 ${isSubmenuOpen ? 'visible' : 'hidden'}`}
            >
                <h4 className='text-2xl font-semibold'>Menu</h4>
                <hr className='w-[90%] mt-2'/>
                <li className='block px-3 py-6 rounded-md text-spaceCadet font-medium space-x-4 mt-8
                    hover:text-slate-600'>
                    <Info/>
                    <ScrollLink to='about' smooth={true} duration={500}>
                    About Us
                    </ScrollLink>
                </li>

                <li className='block px-3 pb-6 rounded-md text-spaceCadet font-medium space-x-4
                    hover:text-slate-600'>
                    <LocalHospitalRounded/>
                    <ScrollLink to='services' smooth={true} duration={500}>
                        Services
                    </ScrollLink>
                </li>
                    
                <li className='block px-3 pb-6 rounded-md text-spaceCadet font-medium space-x-4
                    hover:text-slate-600'>
                    <Group/>
                    <ScrollLink to='team' smooth={true} duration={500}>
                    Our Team
                    </ScrollLink>
                </li>

                <li className='block px-3 pb-6 rounded-md text-spaceCadet font-medium space-x-4
                    hover:text-slate-600'>
                    <Reviews/>
                    <ScrollLink to='reviews' smooth={true} duration={500}>
                    Testimonials
                    </ScrollLink>
                </li>

                <li className='block px-3 pb-6 rounded-md text-spaceCadet font-medium space-x-4
                    hover:text-slate-600'>
                    <LiveHelp/>
                    <ScrollLink to='faq' smooth={true} duration={500}>
                    FAQs
                    </ScrollLink>
                </li>

                <li className='block px-3  rounded-md text-spaceCadet font-medium space-x-4
                    hover:text-slate-600'>
                    <Call/>
                    <ScrollLink to='contact' smooth={true} duration={500}>
                    Contact us
                    </ScrollLink>
                </li>
            </ul>

          </article>
    )
}

export default Submenu;
