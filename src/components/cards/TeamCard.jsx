import React, { useState } from 'react'

const TeamCard = ({ imgSrc, name, title, onClick }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(value => !value);
        onClick();
    };


    return (
        <article className='relative hidden lg:flex'>
            <div className={`absolute inset-0 bg-azure blur-lg ${
                    isClicked ? 'opacity-100' : 'opacity-0'
                }`}                
            >

            </div>

            <div className={`w-64 h-64 bg-fairBlue hover:bg-oceanBlue border-2 
                border-azure flex flex-col justify-center items-center mx-1 my-1 cursor-pointer relative ${
                    isClicked ? 'z-20' : 'z-10'
                }`}
                onClick={handleCardClick}
            >

                <img
                    src={imgSrc}
                    alt={`${name} avatar`}
                    className='w-40 rounded-full border-2 border-azure'       
                />

                <h5 className='text-spaceCadet font-bold text-xl underline'>{name}</h5>
                <p className='text-azure font-medium text-lg'>{title}</p>
            </div>

        </article>

    )
}

export default TeamCard;
