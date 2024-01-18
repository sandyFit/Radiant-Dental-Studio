import React from 'react'
import HeroButton from '../../components/ui/HeroButton';

const Hero = () => {


  return (
    <div className='bg-spaceCadet flex justify-around min-h-screen relative'
      style={{ minHeight: `calc(100vh - 180px)` }}>
      
      <div className="absolute top-20 left-[12rem] w-[28rem] h-[28rem] rounded-full mix-blend-multiply filter blur-2xl 
          opacity-45 bg-gradient-to-r from-oceanBlue to-azure">
        </div>
      <div className='flex flex-col w-1/3 space-y-12 pt-[12rem] pl-12'>
        <h1 className='text-white text-8xl font-bold w-full max-w-12'>
          <span >
            Where
            <span className='text-spanishBlue' style={{ margin: ' 0 1rem' }}>
              Healthy Smiles 
            </span>
          </span>
          Begin
        </h1>
        <p className='text-spanishBlue text-2xl font-medium w-[55rem]'>
          Let us take care of your teeth. Our dedicated team of professionals 
          is committed to providing you with top-notch dental care.
        </p>

        <HeroButton>
          Book online
        </HeroButton>
      </div>

      <div>
        <img className='w-[700px]' src="/images/tooth-hero.png" alt="tooth image" />
      </div>

    </div>
  )
}

export default Hero