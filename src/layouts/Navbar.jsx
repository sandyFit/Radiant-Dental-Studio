// import { Close } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Submenu from '../components/ui/Submenu';
import MainMenu from '../components/ui/MainMenu';

const Navbar = () => {

  // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);


  // const toggleSubmenu = () => {
  //   console.log("Toggling submenu. Current state:", isSubmenuOpen);
  //   setIsSubmenuOpen(!isSubmenuOpen);
  // }

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
           <MainMenu/>  
       
      </div>
        <button className='hidden 2xl:block transparent-btn hover:text-white hover:bg-azure px-10 py-4 ml-5'>
          book online
        </button>

        {/* Mobile */}

          <Submenu />
          
        </div>
         
    </nav>
  );
};

export default Navbar;
