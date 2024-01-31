import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';

const Footer = () => {
    return (
        <section className='bg-spaceCadet h-[50rem] lg:h-[35rem]'>

            {/* Desktop */}

            <article className='relative z-1 hidden lg:flex flex-col justify-between'>

                <div className='flex justify-evenly space-x-6 text-spaceCadet'>
                    <div id="contact">
                        <ContactCard/>
                    </div>
          
                    <div className='mt-20 flex flex-col justify-center items-center'>
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
                    <p className="text-xl font-semibold text-white3 ml-[45rem]">
                        © 2024 Design & Development by Trish Ramos. All rights reserved. 
                    </p>
                </div>
            </article>

            {/* Mobile */}
            <article className="lg:hidden flex flex-col justify-center items-center">
                <MobileFooter/>
            </article>
      
        </section>
    )
}

export default Footer;
