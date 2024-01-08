import React from 'react'

const ViewMoreBtn = ({children}) => {
  return (
      <button
            type="button"
            className="button text-spanishBlue bg-transparent border-spanishBlue p-3 w-80
            shadow-xl shadow-midnight mt-10"
          >
            {children}
        </button>
  )
}

export default ViewMoreBtn