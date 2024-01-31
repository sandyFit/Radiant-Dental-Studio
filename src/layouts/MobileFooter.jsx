import React from 'react'
import ContactCard from '../components/cards/ContactCard'
import WorkingHrsTable from '../components/forms/WorkingHrsTable'
import NewsletterInput from '../components/forms/NewsletterInput'

const MobileFooter = () => {
    return (
        <article className="flex flex-col justify-center items-center bg-spaceCadet min-w-full h-auto">
            <div id='contact'>
                <ContactCard/>
            </div>

            <div className="flex flex-col mt-20">
                <h4 className='text-white3 text-center text-2xl font-semibold'>
                    WORKING HOURS
                </h4>
                <WorkingHrsTable/>
            </div>

            <div className='w-[18rem] flex flex-col items-center my-20 '>
                <h4 className='text-white3 text-center text-2xl font-semibold mb-6'>
                    NEWSLETTER SIGN UP
                </h4>
                <NewsletterInput/>
            </div>

            <div className='w-full h-24 bg-midnight flex justify-center items-center'>
                <p className="text-md md:text-lg font-medium text-white3 text-center mx-auto">
                    © 2024 Design & Development by Trish Ramos.
                    <br/>
                    All rights reserved.
                </p>
            </div>

        </article>
    )
}

export default MobileFooter;
