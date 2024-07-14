import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'


const SignIn = () => {
  return (
    <div className='signInContainer'>
        <form action="">
            <header>SIGN IN FORM</header>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password'/>
            <Link to='/Home'>SIGN UP</Link>
        </form>
    </div>
  )
}

export default SignIn