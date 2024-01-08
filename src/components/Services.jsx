import React from 'react'

const Services = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen space-y-12'>
      <div className='flex flex-col w-10/12 justify-center space-y-12'>
        <h2 className='text-sans text-center text-spaceCadet text-6xl font-bold'>
          Welcome to
          <span className='text-sans text-spanishBlue' style={{ margin: ' 0 1rem' }}>
            Radiant 
          </span>         
          Dental Studio
        </h2>

        <p className='text-sans text-lightBlue text-2xl font-medium'>
          We provide a wide range of treatments, including cosmetic dentistry. Our commitment is rooted in
          assisting patients in preserving lifelong healthy teeth. Trust us for diverse services aimed at
          enhancing both the aesthetics and longevity of your smile.
        </p>
      </div>

      <div className='flex justify-center items-center space-x-4'>
        <div className='flex flex-col justify-center items-start w-[25rem] h-[33rem] bg-spaceCadet 
          hover:bg-midnight p-10 rounded-2xl'>
          <div className='w-32 h-32 rounded-full bg-white3 border-4 border-spanishBlue
            flex items-center justify-center'>
            <img src="/icons/ulcer.png" alt="tooth icon"
              className='w-20 h-20 mb-2' />
          </div>
          <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
            General Dentistry
          </h4>
          <hr className='border-2 border-spanishBlue w-36 my-3'/>
          <p className='text-sans text-white text-xl font-medium'>
            Ensure lifelong dental health with treatments for function, aesthetics, and prevention.
          </p>

          <button
            type="button"
            className="text-spanishBlue text-center font-semibold tracking-wider 
            bg-transparent focus:outline-none border-2 border-spanishBlue
            rounded-lg text-xl uppercase p-3 w-80
            shadow-xl shadow-midnight mt-6"
          >
            view more
          </button>
        </div>

        <div className='flex flex-col justify-center items-start w-[25rem] h-[33rem] bg-spaceCadet 
          hover:bg-midnight p-10 rounded-2xl'>
          <div className='w-32 h-32 rounded-full bg-white3 border-4 border-spanishBlue
            flex items-center justify-center'>
            <img src="/icons/teeth.png" alt="tooth icon"
              className='w-20 h-20' />
          </div>
          <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
            Hygiene and Therapy
          </h4>
          <hr className='border-2 border-spanishBlue w-36 my-3'/>
          <p className='text-sans text-white text-xl font-medium'>
            Ensure lifelong dental health with treatments for function, aesthetics, and prevention.
          </p>

          <button
            type="button"
            className="text-spanishBlue text-center font-semibold tracking-wider 
            bg-transparent focus:outline-none border-2 border-spanishBlue
            rounded-lg text-xl uppercase p-3 w-80
            shadow-xl shadow-midnight mt-6"
          >
            view more
          </button>
        </div>
      
        <div className='flex flex-col justify-center items-start w-[25rem] h-[33rem] bg-spaceCadet 
          hover:bg-midnight p-10 rounded-2xl'>
          <div className='w-32 h-32 rounded-full bg-white3 border-4 border-spanishBlue
            flex items-center justify-center'>
            <img src="/icons/braces.png" alt="tooth icon"
              className='w-20 h-20' />
          </div>
          <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
            Orthodontics
          </h4>
          <hr className='border-2 border-spanishBlue w-36 my-3'/>
          <p className='text-sans text-white text-xl font-medium'>
            Ensure lifelong dental health with treatments for function, aesthetics, and prevention.
          </p>

          <button
            type="button"
            className="text-spanishBlue text-center font-semibold tracking-wider 
            bg-transparent focus:outline-none border-2 border-spanishBlue
            rounded-lg text-xl uppercase p-3 w-80
            shadow-xl shadow-midnight mt-6"
          >
            view more
          </button>
        </div>

        <div className='flex flex-col justify-center items-start w-[25rem] h-[33rem] bg-spaceCadet 
          hover:bg-midnight p-10 rounded-2xl'>
          <div className='w-32 h-32 rounded-full bg-white3 border-4 border-spanishBlue
            flex items-center justify-center'>
            <img src="/icons/dental-implant.png" alt="tooth icon"
              className='w-20 h-20' />
          </div>
          <h4 className='text-sans text-white text-2xl font-semibold mt-6'>
            Cosmetic Dentristry
          </h4>
          <hr className='border-2 border-spanishBlue w-36 my-3'/>
          <p className='text-sans text-white text-xl font-medium'>
            Ensure lifelong dental health with treatments for function, aesthetics, and prevention.
          </p>

          <button
            type="button"
            className="text-spanishBlue text-center font-semibold tracking-wider 
            bg-transparent focus:outline-none border-2 border-spanishBlue
            rounded-lg text-xl uppercase p-3 w-80
            shadow-xl shadow-midnight mt-6"
          >
            view more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services