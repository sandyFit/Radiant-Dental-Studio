import React from 'react'

const Login = () => {
    return (
        <main>
            <div className="flex flex-col justify-center items-center">

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Enter you email address'
                    name='email'
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Enter you password'
                    name='password'
                /> 
            </div>
        </main>
    )
}

export default Login;
