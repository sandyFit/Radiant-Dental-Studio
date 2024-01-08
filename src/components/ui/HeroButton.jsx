import React from 'react'

const HeroButton = ({children}) => {
  return (
      <button
          type='button'
          className="button text-white hover:text-spanishBlue 
          bg-azure hover:bg-transparent border-transparent
          hover:border-2 hover:border-spanishBlue  p-5 w-72
          shadow-xl shadow-midnight"
      >
          {children}
          
    </button>
  )
}

export default HeroButton