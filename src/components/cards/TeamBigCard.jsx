import { Close } from '@mui/icons-material';
import React from 'react'

const TeamBigCard = ({ firstName, lastName, bio, isOpen, onClose }) => {

  const handleClose = () => {
    onClose();
  }

  if (!isOpen) return null;

  return (
    <article 
      style={{ display: isOpen ? "block" : "none" }} // Direct inline style based on `isOpen`
      className={`bg-spaceCadet w-[22rem] lg:w-[35rem] h-auto lg:h-[42rem] absolute left-[-2rem] lg:left-[58rem] 
      top-[2rem] lg:top-[6rem] rounded-xl xl:rounded-[38px] flex flex-col justify-center items-center 
      px-14 py-8 space-y-8 shadow-xl shadow-midnight z-20 lg:z-1`}
    >


      <button className="lg:hidden text-spanishBlue absolute left-[19.5rem] top-4"
              onClick={handleClose}
      >
        <Close/>
      </button>
      <h2 className='text-center text-white2 text-2xl xl:text-4xl font-bold'>
        {firstName}
        <span className='text-azure' style={{ margin: ' 0 1rem' }}>
          {lastName}
        </span>
      </h2>

      <hr className='border-2 border-spanishBlue w-36 my-3' />

      <p className='text-white3 text-md md:text-lg xl-text-xl font-regular xl:font-medium'>
        {bio && bio.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <br />} {/* Add line break except before the first paragraph */}
            {index !== 0 && <br />}
            {paragraph}
          </React.Fragment>
        ))}
      </p>
    </article>
  );
}

export default TeamBigCard;
