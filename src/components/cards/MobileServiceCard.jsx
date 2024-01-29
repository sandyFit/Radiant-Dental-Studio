import React from 'react'

const MobileServiceCard = ({ iconSrc, title, description, onClick }) => {
    

    return (
        <article className='bg-spaceCadet w-full px-6 py-4 md:py-10 rounded-xl'>
            <button className='flex justify-center items-center gap-4 md:gap-8 ml-0 md:ml-6'
                onClick={onClick}>
                <div className='w-16 md:w-24 h-16 md:h-24 rounded-full bg-white3 border-4 border-spanishBlue
                    flex items-center justify-center'>
                    <img src={iconSrc} alt={`${title} icon`} 
                    className='w-8 md:w-14 h-8 md:h-14 object-cover rounded-full' />
                </div>

                <div className="flex md:flex-col md:justify-center md:items-start">

                    <h4 className='text-sans text-white text-{.8rem} md:text-2xl font-semibold'>
                        {title}
                    </h4>

                    <p className='hidden md:block text-sans text-white text-medium text-left'>
                        {description}
                    </p>
                </div>
            </button>
        </article>
    )
}   

export default MobileServiceCard; 
