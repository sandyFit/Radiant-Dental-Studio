import React from 'react'
import HeroButton from '../../components/ui/HeroButton'

const Hero = () => {


  return (
    <div className='bg-spaceCadet flex justify-around min-h-screen'
      style={{ minHeight: `calc(100vh - 180px)` }}>
      <div className='flex flex-col w-1/3 space-y-12 pt-[12rem] pl-12'>
        <h1 className='text-white text-7xl font-bold w-full max-w-12'>
          <span >
            Where
            <span className='text-spanishBlue' style={{ margin: ' 0 1rem' }}>
              Healthy Smiles 
            </span>
          </span>
          Begin
        </h1>
        <p className='text-lightBlue text-2xl font-medium w-[55rem]'>
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