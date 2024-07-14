import React from 'react'
import Navigations from '../../components/Navigations/Navigations'
import PostForm from '../../components/PostForm/PostForm'
import './Home.css'
import house2 from '../../assets/house2.jpg'
import ExistingEstablishment from '../../components/ExistingEstablishments/ExistingEstablishment'
const Home = () => {
  return (
    <div className='homeContainer'>
        <Navigations/>
        <section className="newHouse">
        <PostForm/>
        <span className="imageCarosel">
          
          <img src={house2} alt="house image" srcset="" />
        </span>
        </section>
      
        <ExistingEstablishment/>
    </div>
  )
}

export default Home