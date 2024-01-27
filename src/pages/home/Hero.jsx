import React from 'react'

const Hero = () => {


  return (
    <section className='bg-spaceCadet flex lg:justify-start xl:justify-around relative'
      style={{ minHeight: `calc(100vh - 180px)` }}>
      
      <div className='flex flex-col w-1/3 space-y-12 pt-[2rem] md:pt-[6rem] lg:pt-[10rem] xl:pt-[12rem] 
        pl-12 md:pl-[6rem] lg:pl-[10rem] xl:pl-12'>
        <h1 className='text-6xl md:text-7xl lg:text-8xl text-white font-bold w-full max-w-12 '>
          <span >
            Where
            <span className='text-spanishBlue' style={{ margin: ' 0 1rem' }}>
              Healthy Smiles 
            </span>
          </span>
          Begin
        </h1>
        <p className='text-spanishBlue text-lg md:text-xl lg:text-2xl font-medium w-[30rem] md:w-[40rem] 
          lg:w-[50rem] xl:w-[55rem]'>
          Let us take care of your teeth. Our dedicated team of professionals 
          is committed to providing you with top-notch dental care.
        </p>

        <button className='filled-btn p-3 md:p-5 w-72'>
          Book online
        </button>
      </div>

      <div className='hidden xl:block'>
        <img className='w-[700px]' src="/images/tooth-hero.png" alt="tooth image" />
      </div>

    </section>
  )
}

export default Hero;
