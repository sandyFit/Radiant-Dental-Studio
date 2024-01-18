import { useState } from 'react';

const TeamCards = ({ imgSrc, name, title, onClick, isSelected }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    onClick();
    setIsClicked(true);
  };

  // Reset the state of the previously clicked card when a new card is clicked
  const handleNewCardClick = () => {
    // Check if this card is not already selected
    if (!isSelected) {
      // Reset the state of the previously clicked card
      setIsClicked(false);
      // Trigger the click event for the new card
      onClick();
      // Set the state for the new card
      setIsClicked(true);
    }
  };

  return (
    <div className='relative'>
      <div
        className={`absolute inset-0 bg-azure blur-lg ${
          (isClicked || isSelected) ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleNewCardClick}
      ></div>

      <div
        className={`w-64 h-64 bg-fairBlue hover:bg-oceanBlue border-2 border-azure flex flex-col
            justify-center items-center mx-1 my-1 cursor-pointer relative ${
              (isClicked || isSelected) ? 'z-20' : 'z-10'
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
    </div>
  );
};

export default TeamCards;
