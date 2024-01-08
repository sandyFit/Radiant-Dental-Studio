import React from 'react'
import ServiceCard from '../../components/cards/ServiceCard'

const Services = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12'>
      <div className='flex flex-col w-10/12 justify-center space-y-8'>
        <h2 className='text-center text-spaceCadet text-6xl font-bold'>
          Welcome to
          <span className='text-azure' style={{ margin: ' 0 1rem' }}>
            Radiant 
          </span>         
          Dental Studio
        </h2>

        <p className='text-lightBlue text-2xl font-semibold'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>

      <div className='flex justify-center items-center space-x-4'>
        <ServiceCard
          iconSrc="/icons/broken-tooth.png"
          title="General Dentistry"
          description="Ensure lifelong dental health with treatments for function, aesthetics, and prevention."
        />
        <ServiceCard
          iconSrc="/icons/teeth.png"
          title="Hygiene and Therapy"
          description="Ensure lifelong dental health with treatments for function, aesthetics, and prevention."
        />
        <ServiceCard
          iconSrc="/icons/braces.png"
          title="Orthodontics"
          description="Ensure lifelong dental health with treatments for function, aesthetics, and prevention."
        />
        <ServiceCard
          iconSrc="/icons/dental-implant.png"
          title="Cosmetic Dentistry"
          description="Ensure lifelong dental health with treatments for function, aesthetics, and prevention."
        />
      </div>
    </div>
  )
}

export default Services