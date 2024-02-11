import WorkingHrsTable from '../components/forms/WorkingHrsTable';
import NewsletterInput from '../components/forms/NewsletterInput';
import ContactCard from '../components/cards/ContactCard';
import MobileFooter from './MobileFooter';



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
                            <div className='w-1/2 flex flex-col justify-center items-center mt-20'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                                WORKING HOURS
                                </h4>
                                <WorkingHrsTable />                                     
                            </div>

                            <div className='w-1/2 flex flex-col items-center mt-20'>
                                <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                                NEWSLETTER SIGN UP
                                </h4>
                                <NewsletterInput/>
                            </div>
                        </div>
                        <div className="flex justify-evenly gap-[10rem] mt-[5.5rem] text-spanishBlue 
                            list-none text-lg w-full">
                            <li>TERMS OF USE</li>
                            <li>PRIVACY POLICY</li>
                            
                            
                        </div>
                    </div>
                    

                </div>

                
                <div className='absolute inset-0 top-[35rem] w-full h-16 bg-midnight flex items-center justify-end 
                    text-center'>
                    <p className="text-lg font-light text-white3 mr-[35rem]">
                        © 2024 Design & Development by Trish Ramos. All rights reserved. 
                    </p>
                    {/* <button className='text-spanishBlue mr-16' onClick={scrollToTop}>
                        <ArrowUpward />TOP
                    </button> */}
                    
                    {/* <button onClick={scrollToTop}
                        class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden 
                        rounded-full bg-slate-600 bottom-16 right-16">
                        <div class="transition duration-300 group-hover:rotate-[360deg] text-spanishBlue">
                            <ArrowUpward />
                        </div>
                    </button> */}
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
