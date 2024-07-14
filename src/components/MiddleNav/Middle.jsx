import React from 'react'
import './Middle.css'
import { Link } from 'react-router-dom'

const Middle = () => {
  return (
    <div className='middleContainer'>
        <header>
            HOUSES
        </header>
        <nav>
            <li>HOME</li>
          
            <Link to='SignIn'>LOGIN</Link>
            
        </nav>
    </div>
  )
}

export default Middle