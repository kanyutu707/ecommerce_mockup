import React from 'react'
import Houses from '../../components/Houses/Houses'
import Navigations from '../../components/Navigations/Navigations'
import './Index.css'
const Index = () => {
  return (
    <div className='indexContainer'>
        <Navigations/>
        <Houses/>
    </div>
  )
}

export default Index