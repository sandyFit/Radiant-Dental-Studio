import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';
import { Link } from '@mui/material';



const Footer = () => {


    return (
        <section className='bg-spaceCadet h-[50rem] lg:h-[35rem]'>

            {/* Desktop */}

            <article className='relative z-1 hidden lg:flex flex-col justify-between'>

                <div className='flex justify-evenly space-x-6 text-spaceCadet pl-24'>
                    <div id="contact">
                        <ContactCard/>
                    </div>
          
                    <div className="flex flex-col w-full">
                        <div className="flex justify-around items-center w-full px-12">
                            <div className='w-1/2 flex flex-col justify-center items-center mt-[6rem]'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                                WORKING HOURS
                                </h4>
                                <WorkingHrsTable />                                     
                            </div>

                            <div className='w-1/2 flex flex-col items-center mt-[6rem]'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                                NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput/>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>

                
                <div className='absolute inset-0 top-[35rem] w-full h-16 bg-midnight flex items-center justify-end 
                    text-center gap-[22rem]'>
                    <p className="text-lg font-light text-blue-400 ">
                        © 2024 Design & Development by Trish Ramos. 
                    </p>
                    <div className="flex justify-evenly text-blue-400
                        list-none text-lg w-[22%] pr-[5rem] ">
                        <Link to='/terms' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Terms of Use
                        </Link>
                            |
                        <Link to='/policy' 
                            style={{color: '#60A5FA', textDecoration: 'none'}}>
                            Privacy Policy
                        </Link>                          
                    </div>
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
