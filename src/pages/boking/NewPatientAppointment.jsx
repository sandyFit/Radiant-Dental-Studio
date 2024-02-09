import React, {useState} from 'react'
import BookingNavbar from '../../layouts/BookingNavbar';
import BookingFooter from '../../layouts/BookingFooter';
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS
import { ArrowBack, CalendarMonth } from '@mui/icons-material';
import BookingContactCard from '../../components/cards/BookingContactCard';
import staffData from '../../components/data/staffData.json';
import SmallAvatars from '../../components/ui/SmallAvatars';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import BookingCalendar from '../../components/ui/BookingCalendar';


const NewPatientAppoinment = () => {
    
    const [openCalendar, setOpenCalendar] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState('');
    const navigate = useNavigate();

    const handleCalendar = () => {
        console.log('clicked')
        setOpenCalendar(!openCalendar);
        console.log('calendar open')
    }

    const handleAppointmentChange = (e) => {
        setSelectedAppointment(e.target.value);
    }

    return (
        <main className='flex flex-col min-w-screen h-screen overflow-hidden'>
            <BookingNavbar />
            <section className='flex flex-grow justify-between overflow-hidden'>
                <article className='w-3/4 flex flex-col overflow-y-auto max-h-screen '>
                    {/* Adjusted Content Section for Centering */}
                    <div className="flex-1 flex flex-col justify-center relative px-36 py-28">
                        <button className="absolute top-8 text-lg font-medium text-blue-400"
                            onClick={() => navigate(-1)} 
                        >
                            <ArrowBack/> Back
                        </button>
                        <div className="flex justify-between w-full mb-4">
                            <h2 className='text-spaceCadet text-xl md:text-3xl xl:text-4xl font-bold text-left w-[65%]'>
                                Select an Appointment
                            </h2>

                            <select id="appointment"
                                className="input w-80"
                                value={selectedAppointment} // Using the state
                                onChange={handleAppointmentChange} // Update the state based on user selection
                            >
                                <option value="">Select an Appointment</option>
                                <option value="new">New Patient</option>
                                <option value="existing">Existing Patient</option>
                                <option value="emergency">Emergency</option>
                            </select>
                        </div>
                      
                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />
                        
                        <div > {/* This is the parent flex container */}
                            <BookingContactCard/>
                        </div>

                        <hr className='border-t-2 border-slate-300 w-[100%] my-6' />

                        <div className="flex mt-6 mb-10">                            
                            <button
                                onClick={handleCalendar}
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md 
                                bg-spanishBlue px-12 text-xl uppercase font-semibold text-neutral-50">
                                <span className="absolute h-0 w-0 bg-blue-500 
                                    transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
                                <span className="relative">Select Date <CalendarMonth/></span>
                            </button>
                        </div>                                                   
                            
                        <div className="absolute bottom-[28.5rem] z-50">
                            {openCalendar && (
                                        <Calendar
                                    onChange={handleAppointmentChange} // Corrected props for handling date change
                                    value={selectedAppointment} // Controlled component for selected date
                                />
                            )}
                        
                        </div>
                        

                        <BookingCalendar/>
                        
                        {/* <hr className='border-t-2 border-slate-300 w-[100%] my-6' /> */}
                        
                        {staffData.filter(member => member.title !== 'Dental Assistant')
                            .map(member => {
                                return (
                                    <SmallAvatars
                                        key={member.id}
                                        imgSrc={member.imgSrc}
                                        name={member.name}
                                        title={member.title}
                                    />
                                );
                        })}
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
