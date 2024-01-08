import React from 'react'

const NavbarButton = ({children}) => {
    return (
        <button
            type="button"
            class="button text-spanishBlue bg-transparent hover:text-white hover:bg-azure 
            border-spanishBlue px-10 ml-5 shadow-xl shadow-midnight">
            {children}
        </button>
    )
}

export default NavbarButton