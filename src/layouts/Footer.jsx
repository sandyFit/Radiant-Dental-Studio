import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';


const Footer = () => {
  return (
    <div className='relative z-1 flex flex-col justify-between bg-spaceCadet h-[35rem]'>
      <div className='flex justify-evenly space-x-6 text-spaceCadet'>
        <div id="contact">
          <ContactCard/>
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
      
      <div className='absolute inset-0 top-[35rem] w-full h-16 bg-midnight flex items-center'>
        <div className='h-16'></div>
        <p className="text-xl font-semibold text-white3 ml-[45rem]">
          © 2024 Design & Development by Trish Ramos. All rights reserved. 
        </p>
      </div>
    </div>
  );
};


export default Footer
