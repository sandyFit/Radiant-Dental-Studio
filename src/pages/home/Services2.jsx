import React, {useState} from 'react';
// Import other dependencies...

const NewPatientAppointment = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date()); // Added state for the calendar date
    const navigate = useNavigate();

    const handleCalendar = () => {
        console.log('clicked');
        setOpenCalendar(!openCalendar);
        console.log('calendar open');
    };

    const handleAppointmentChange = (e) => {
        setSelectedAppointment(e.target.value);
    };

    // New function to handle date change
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
        // Consider closing the calendar and proceeding to the next step here
        setOpenCalendar(false);
    };

    return (
        <main className='flex flex-col min-w-screen h-screen overflow-hidden'>
            {/* Your existing code... */}

                            {openCalendar && (
                                <Calendar
                                    onChange={handleDateChange} // Corrected props for handling date change
                                    value={selectedDate} // Controlled component for selected date
                                />
                            )}

            {/* Your existing code... */}
        </main>
    );
};

export default NewPatientAppointment;
