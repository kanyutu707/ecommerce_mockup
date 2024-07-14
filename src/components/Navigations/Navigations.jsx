import React from 'react'
import Topnav from '../Topnav/Topnav'
import Middle from '../MiddleNav/Middle'
import BottomNav from '../BottomNav/BottomNav'
import './Navigations.css'

const Navigations = () => {
  return (
    <div className='navigationContainer'>
        <Topnav/>
        <Middle/>
        <BottomNav/>
    </div>
  )
}

export default Navigations