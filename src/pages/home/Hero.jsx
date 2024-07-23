import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('book')
  }


  return (
    <section className='bg-custom-gradient-bg flex lg:justify-start 2xl:justify-around relative'
      style={{ minHeight: `calc(100vh - 170px)` }}>
      
      <div className='flex flex-col w-1/3 space-y-12 pt-[7rem] md:pt-[10rem] xl:pt-[12rem] 
        pl-12 md:pl-[6rem] lg:pl-[10rem] 2xl:pl-12'>
        <h1 className='text-[2.7rem] md:text-7xl lg:text-8xl text-white font-bold w-full max-w-12 
          leading-[3rem]'>
          <span >
            Where
            <span className='text-spanishBlue' style={{ margin: ' 0 1rem' }}>
              Healthy Smiles 
            </span>
          </span>
          Begin
        </h1>
        <p className='text-spanishBlue text-lg md:text-xl lg:text-2xl font-medium w-[20rem] md:w-[40rem] 
          lg:w-[50rem] xl:w-[55rem]'>
          Let us take care of your teeth. Our dedicated team of professionals 
          is committed to providing you with top-notch dental care.
        </p>

        <button
          className='btn-filled group relative overflow-hidden transition p-5 w-72 hover:bg-azure'
          onClick={handleClick}
        >
          <span className='relative'>Book online</span>
          <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full 
            justify-center blur-[16px]">
            <div className="relative h-full w-8 bg-white/40"></div>
          </div>
        </button>
    
      </div>

      <div className='hidden 2xl:block'>
        <img className='w-[700px]' src="/images/tooth-hero.png" alt="tooth image" />
      </div>

    </section>
  )
}

export default Hero;
