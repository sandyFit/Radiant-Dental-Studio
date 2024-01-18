import React from 'react'

const FloatingBtn = ({children}) => {
  return (
        <button
            type="button"
            className="button text-white3 bg-azure hover:text-spanishBlue hover:bg-transparent 
            border-transparent hover:border-2 hover:border-spanishBlue px-10 py-4 shadow-xl shadow-midnight">
            {children}
        </button>
    )
}

export default FloatingBtn