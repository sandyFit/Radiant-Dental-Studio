import React, { useState } from 'react'

const TeamMobileCard = ({ imgSrc, name, title, onClick }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(value => !value);
        onClick();
    };


    return (
        <article className='relative lg:hidden flex flex-col'>
            <div className={`absolute inset-0 bg-azure blur-lg ${
                    isClicked ? 'opacity-100' : 'opacity-0'
                }`}                
            >

            </div>

            <div className={`w-[18rem] h-30 bg-fairBlue hover:bg-oceanBlue p-2 border-2 
                border-azure flex justify-start items-center gap-4 mx-1 my-1 cursor-pointer relative 
                ${ isClicked ? 'z-20' : 'z-10' }`}
                onClick={handleCardClick}
            >

                <img
                    src={imgSrc}
                    alt={`${name} avatar`}
                    className='w-20 rounded-full border-2 border-azure'       
                />

                <div className="flex flex-col">
                    <h5 className='text-spaceCadet font-bold text-lg underline'>{name}</h5>
                    <p className='text-azure font-medium text-md'>{title}</p>
                </div>
            </div>

        </article>

    )
}

export default TeamMobileCard;
