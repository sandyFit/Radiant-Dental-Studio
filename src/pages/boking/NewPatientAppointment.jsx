import React from 'react'
import BookingNavbar from '../../layouts/BookingNavbar';
import BookingFooter from '../../layouts/BookingFooter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { CalendarMonth } from '@mui/icons-material';

const NewPatientAppoinment = () => {
    return (
        <main className='flex flex-col min-w-screen h-screen overflow-hidden'>
            <BookingNavbar />
            <section className='flex flex-grow justify-between overflow-hidden'>
                <article className='w-3/4 flex flex-col overflow-y-auto max-h-screen mt-24'>
                    {/* Adjusted Content Section for Centering */}
                    <div className="flex-1 flex flex-col justify-center px-36 py-6">
                        <div className="flex justify-between w-full">
                            <h2 className='text-spaceCadet text-xl md:text-3xl xl:text-4xl font-bold text-left w-[65%]'>
                                Select an Appointment
                            </h2>

                            <select id="appointment"
                                className="input w-80"
                            >
                                <option selected>Select an Appointment</option>
                                <option value="new">New Patient</option>
                                <option value="existing">Existing Patient</option>
                                <option value="emergency">Emergency</option>
                            </select>
                        </div>

                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />
                        
                        <div className="flex mt-4 gap-32"> {/* This is the parent flex container */}
                            <div className="flex justify-center w-80"> {/* Wrap the text next to the icon in a div */}
                                <LocationOnIcon style={{ color: '#0084FF', fontSize: '2rem' }}/>
                                <p className='text-xl font-medium'>
                                    Radiant Dental Studio
                                    123 Main Street
                                    Anytown, NJ 07001
                                </p>
                            </div>

                            <div className='flex justify-center ml-2 w-72'> {/* Add ml-8 or another gap value here */}
                                <PhoneIcon style={{ color: '#0084FF', fontSize: '2rem' }} />
                                <p className='text-xl font-medium'>
                                    991 318 66 99
                                </p>
                            </div>

                            <div className='flex justify-center ml-2'> {/* Add ml-8 or another gap value here */}
                                <EmailIcon style={{ color: '#0084FF', fontSize: '2rem' }} />
                                <p className='text-xl font-medium'>
                                    info@radiantdental.com
                                </p>
                            </div>
                        </div>

                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />
                        
                        
                        <div className="flex">                            
                            <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md 
                                bg-spanishBlue px-12 text-xl uppercase font-semibold text-neutral-50">
                                <span class="absolute h-0 w-0 bg-blue-500 
                                    transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
                                <span class="relative">Select Date <CalendarMonth/></span>
                            </button>
                        </div>

                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />
                        
                        <div className="flex justify-start items-center w-full gap-4">
                            <div className='avatar-sm'>
                                <img src="/images/doc1.jpeg" alt="Nathan Roberts" className='avatar-img-sm'/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className='text-slate-500'>DENTIST</h4>
                                <h3 className='text-xl font-semibold '>Nathan Roberts</h3> 
                            </div>
                        </div>

                        <hr className='border-t-2 border-slate-300 w-[100%] my-6'/>

                        <div className="flex justify-start items-center w-full gap-4">
                            <div className='avatar-sm' >                               
                                <img src="/images/doc4.jpeg" alt="Karim Asouza" className='avatar-img-sm'/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className='text-slate-500'>DENTIST</h4>
                                <h3 className='text-xl font-semibold '>Karim Asouza</h3> 
                            </div>
                        </div>
                        <hr className='border-t-2 border-slate-300 w-[100%] my-6'/>

                        <div className="flex justify-start items-center w-full gap-4">
                            <div className='avatar-sm' >
                                
                                <img src="/images/doc8.jpeg" alt="Judy Woods" className='avatar-img-sm'/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className='text-slate-500'>DENTIST</h4>
                                <h3 className='text-xl font-semibold '>Judy Woods</h3> 
                            </div>
                        </div>
                        <hr className='border-t-2 border-slate-300 w-[100%] my-6'/>

                        <div className="flex justify-start items-center w-full gap-4 mb-24">
                            <div className='avatar-sm' >
                                
                                <img src="/images/doc7.jpeg" alt="Joseph Gale" className='avatar-img-sm'/>
                            </div>
                            <div className="flex flex-col">
                                <h4 className='text-slate-500'>DENTIST</h4>
                                <h3 className='text-xl font-semibold '>Joseph Gale</h3> 
                            </div>
                        </div>
                    </div>

                    

                    {/* Footer Section */}
                    <div className="">
                        <BookingFooter/>
                    </div>
                </article>

                <article className='overflow-hidden'> {/* Adjusted width for the right article if you're using a 3/4 and 1/4 layout */}
                    <img src="/map.jpg" alt="Radiant Google Map" className='w-full h-screen object-cover' />
                </article>
            </section>
        </main>
    );
}

export default NewPatientAppoinment;
