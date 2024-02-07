import React from 'react'
import LoginNavbar from '../../layouts/LoginNavbar'

const SignUp = () => {
    return (
        <main>
            <LoginNavbar/>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-start w-[60%] h-auto border-t-0 border-2 
                    border-slate-300 rounded-b-md p-16 pb-36">    

                    <h3 className='text-spaceCadet text-2xl font-bold'>
                        Appointment Request
                    </h3>  
                    <hr className='border-t-2 border-slate-300 w-[100%] my-6'/>
                    <p className='text-lg'>
                        Please answer the questions below. We will do our best to schedule on your requested
                        date and time. A confirmation email or phone call will follow with your selected time.
                    </p>

                    <div className="flex flex-col gap-4 relative">

                        <div className="flex justify-center items-center mt-6 gap-12">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className='font-semibold'
                                >
                                    Patient Full Name
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    className='input w-[30rem]'
                                />
                            </div>  
                            <div className="flex flex-col">
                                <label
                                    htmlFor="age"
                                    className='font-semibold'
                                >
                                    Patient Birth Date (mm/dd/yyyy)
                                </label>
                                <input
                                    type="text"
                                    name='age'
                                    className='input w-[30rem]'
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center my-6 gap-12">    
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className='font-semibold'
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder='john@doe.com'
                                    name='email'
                                    className='input w-[30rem]'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="text"
                                    className='font-semibold'
                                >
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    placeholder='(000) 000-0000'
                                    name='password'
                                    className='input w-[30rem]'
                                /> 
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className='font-semibold'
                            >
                                Do you have any special considerations?
                            </label>
                            <textarea
                                rows="4"
                                cols=""
                                name='message'
                                placeholder='Optional'
                                className='input'
                            >
                            </textarea>
                        </div>
                        <button
                            type='submit'
                            className='filled-btn px-16 py-4 absolute -bottom-24 left-[50rem]'
                        >
                            Submit
                        </button>
                    </div>
                        
                </div>
            </div>
        </main>
    )
}

export default SignUp