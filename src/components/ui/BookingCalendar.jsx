import React, { useState } from 'react';
import { startOfWeek, endOfWeek, eachDayOfInterval, addWeeks, format } from 'date-fns';
import "react-day-picker/dist/style.css";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const BookingCalendar = () => {
    const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

    const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 1 }),
    });

    const handlePrevWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, -1));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    };

    return (
        <div className='relative'>
            <button onClick={handlePrevWeek}><ChevronLeft/></button>
            <ul className='flex justify-center gap-16'>
                {weekDays.map((day) => (
                    <li key={day.toString()}>
                        <button
                            style={{
                                padding: '10px',
                                
                            }}
                        >
                            {format(day, 'EEEEEE')}<br />
                            {format(day, 'd MMM')}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleNextWeek}
                className='absolute left-[57rem] -botton-16 text-azure'
            >
                <ChevronRight style={{fontSize: '3rem'}}/>
            </button>
        </div>
    );
};

export default BookingCalendar;
