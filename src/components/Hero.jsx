import React from 'react'

const Hero = () => {


  return (
    <div className='bg-spaceCadet flex justify-around min-h-screen py-10'
      style={{ minHeight: `calc(100vh - 180px)` }}>
      <div className='flex flex-col max-w-screen-md space-y-12 pt-[8rem]'>
        <h1 className='text-sans text-white text-7xl font-bold w-full max-w-12'>
          <span >
            Where
            <span className='text-sans text-spanishBlue' style={{ margin: ' 0 1rem' }}>
              Healthy Smiles 
            </span>
          </span>
          Begin
        </h1>
        <p className='text-sans text-lightBlue text-2xl font-medium w-full max-w-18'>
          Let us take care of your teeth. Our dedicated team of professionals 
          is committed to providing you with top-notch dental care.
        </p>

        <button
          type="button"
          className="text-white hover:text-spanishBlue text-center font-semibold tracking-wider 
          bg-azure hover:bg-transparent focus:outline-none border-2 border-transparent
          hover:border-2 hover:border-spanishBlue rounded-lg text-xl uppercase p-5 w-72
          shadow-xl shadow-midnight"
        >
          Book online
        </button>
      </div>

      <div>
        <img className='max-w-[900px]' src="/images/tooth-hero.png" alt="tooth image" />
      </div>
    </div>
  )
}

export default Hero