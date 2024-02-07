import React from 'react'
import BookingNavbar from '../../layouts/BookingNavbar';
import BookingFooter from '../../layouts/BookingFooter';

const BookOnline = () => {
    return (
        <main className='flex flex-col min-h-screen'>
            <BookingNavbar />
            <section className='flex flex-grow justify-between'>
                <div className='w-3/4 flex flex-col'>
                    {/* Adjusted Content Section for Centering */}
                    <div className="flex-1 flex flex-col justify-center items-center py-6">
                        <h2 className='text-spaceCadet text-xl md:text-3xl xl:text-4xl font-bold text-left w-[55%]'>
                            What Type of Appointment Would You Like to Schedule?
                        </h2>
                        <div className="space-y-4 mt-4">
                            <button className="booking-btn">New Patient</button>
                            <button className="booking-btn">Existing Patient</button>
                            <button className="booking-btn">Emergency/Toothache</button>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="">
                        <BookingFooter/>
                    </div>
                </div>

                <div className='w-auto'> {/* Adjusted width for the right div if you're using a 3/4 and 1/4 layout */}
                    <img src="/map.jpg" alt="Radiant Google Map" className='w-full h-full object-cover' />
                </div>
            </section>
        </main>
    );
}

export default BookOnline;
