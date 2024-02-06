import React from 'react'

const SignUp = () => {
  return (
      <main>
          <div className="flex flex-col justify-center items-center">

                <label htmlFor="name">Name</label>
                <input
                    type="name"
                    placeholder='Enter you full name'
                    name='name'
                />
                
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Enter you email address'
                    name='email'
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    name='password'
              /> 
              
                <label htmlFor="confirm-pass">Confirm your Password</label>
                <input
                    type="password"
                    placeholder='Confirm your password'
                    name='confirm-pass'
                /> 
            </div>
    </main>
  )
}

export default SignUp