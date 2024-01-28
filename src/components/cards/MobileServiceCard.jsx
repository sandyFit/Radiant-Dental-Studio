import React from 'react'

const MobileServiceCard = ({ iconSrc, title, onClick }) => {
    

    return (
        <article className='bg-spaceCadet w-full px-6 py-4 rounded-xl'>
            <button className='flex justify-center items-center gap-4 '
                onClick={onClick}>
                <div className='w-16 h-16 rounded-full bg-white3 border-4 border-spanishBlue
                    flex items-center justify-center'>
                    <img src={iconSrc} alt={`${title} icon`} 
                    className='w-8 h-8 mb-2' />
                </div>
                <h4 className='text-sans text-white text-{.8rem} font-semibold'>
                    {title}
                </h4>
            </button>
        </article>
    )
}   

export default MobileServiceCard; 
