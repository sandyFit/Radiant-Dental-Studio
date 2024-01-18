import React from 'react'

const TeamBigCard = ({ firstName, lastName, bio }) => {
  return (
    <div className='bg-spaceCadet w-[35rem] h-[42rem] absolute right-[-20rem] bottom-[-5rem] rounded-[38px]
        flex flex-col justify-center items-center px-14 space-y-8 shadow-xl shadow-midnight'
    >
      <h2 className='text-center text-white2 text-4xl font-bold'>
        {firstName}
        <span className='text-azure' style={{ margin: ' 0 1rem' }}>
          {lastName}
        </span>
      </h2>

      <hr className='border-2 border-spanishBlue w-36 my-3' />

      <p className='text-white3 text-xl font-medium'>
        {bio && bio.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <br />} {/* Add line break except before the first paragraph */}
            {index !== 0 && <br />}
            {paragraph}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default TeamBigCard;
