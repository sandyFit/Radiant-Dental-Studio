import React from 'react';
import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='relative z-1 flex flex-col justify-between bg-spaceCadet h-[35rem]'>
      <div className='flex justify-evenly space-x-6 text-spaceCadet'>
        <div className='bg-spanishBlue h-[38.70rem] w-[30rem] flex flex-col items-center space-y-4 relative z-10'>
          <h4 className='text-white text-center text-2xl font-semibold mt-20'>
            CONTACT US
          </h4>

          <div className='flex flex-col items-start'>
            <div className='flex m-4'>
              <LocationOnIcon/>
              <p className='w-48 ml-2 text-lg font-medium'>
                Radiant Dental Studio
                123 Main Street
                Anytown, NJ 07001
              </p>
            </div>

            <div className='flex m-4'>
              <PhoneIcon />
              <p className='ml-2 text-lg font-medium'>
                991 318 66 99
              </p>
            </div>

            <div className='flex m-4'>
              <EmailIcon />
              <p className='ml-2 text-lg font-medium'>
                info@radiantdental.com 
              </p>
            </div>
          </div>

          <div className='flex justify-between space-x-14 pt-10'>
                <InstagramIcon style={{fontSize: '3rem'}} />
                <LinkedinIcon style={{fontSize: '3rem'}}  />
                <TwitterIcon style={{fontSize: '3rem'}}  />
          </div>
        </div>

        <div className='mt-20'>
          <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
            WORKING HOURS
          </h4>
          <WorkingHrsTable/>
        </div>

        <div className='w-[18rem] flex flex-col items-center mt-20'>
          <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
            NEWSLETTER SIGN UP
          </h4>
          <NewsletterInput/>
        </div>
      </div>
      
      <div className='absolute inset-0 top-[35rem] w-full h-16 bg-midnight flex items-center justify-center'>
        <div className='h-16'></div>
        <p className="text-xl font-semibold text-white3">
          © 2024 Radiant Dental Studio. All rights reserved.
        </p>
      </div>
    </div>
  );
};


export default Footer
