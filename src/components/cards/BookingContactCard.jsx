import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const BookingContactCard = () => {
    return (
        <article className="flex mt-4 gap-32">
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
        </article>
    )
}

export default BookingContactCard