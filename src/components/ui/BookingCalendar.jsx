import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {

    const [date, setDate] = useState(new Date());

    return (
        <article>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            
            <div className="text-center">
                <span className="bold">
                    Selected Date:
                </span>{' '}
                {date.toDateString()}
            </div>
        </article>
    )
}

export default BookingCalendar