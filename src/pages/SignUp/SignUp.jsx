import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='signUpContainer'>
        <form action="">
            <header>SIGN UP FORM</header>
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password' />
            <Link to='/SignIn'>SIGN IN</Link>
        </form>
    </div>
  )
}

export default SignUp