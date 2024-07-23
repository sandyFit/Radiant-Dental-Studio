import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Stars = () => {
    return (
        <div className='space-x-2'>
            <span className='bg-spaceCadet px-4 text-spanishBlue font-bold absolute top-[-1.5rem]
                left-8'>
                {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} style={{ fontSize: '2.8rem' }} />
                ))}
            </span>
        </div>
    )
}

export default Stars;
