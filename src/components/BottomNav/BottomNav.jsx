import React from 'react'
import './BottomNav.css'
import { Link } from 'react-router-dom'


const BottomNav = () => {
  return (
    <div className='bottomNavContainer'>
        <Link to='SignUp'>SIGN UP</Link>
      
        <span>
            <input type="search" placeholder='search ...' />
        </span>
    </div>
  )
}

export default BottomNav