import React from 'react'

const NewsletterBtn = ({children}) => {
    return (
        <button
            type="button"
            className="button text-spanishBlue bg-transparent hover:text-white hover:bg-azure 
            border-spanishBlue w-[10rem] py-2 shadow-xl shadow-midnight">
            {children}
        </button>
    )
}

export default NewsletterBtn