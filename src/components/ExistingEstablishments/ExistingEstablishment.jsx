import React, { useState } from 'react'
import house from '../../assets/house.jpg'
import house2 from '../../assets/house2.jpg'
import house3 from '../../assets/house3.jpg'
import house4 from '../../assets/house4.jpg'
import house5 from '../../assets/house5.jpg'
import house6 from '../../assets/house6.jpg'
import {Rating} from 'react-simple-star-rating'
import './ExistingEstablishment.css'

const ExistingEstablishment = () => {
    const [rating, setRating]=useState(0)

    const handleRating=(rate)=>{
        setRating(rate)
    }

    const onPointerEnter=()=>console.log('Enter')
    const onPointerLeave=()=>console.log('Leave')
    const onPointerMove=(value, index)=>console.log(value, index)
  return (
    <div className='existinghouseContainer'>
        <section className="house">
            <img src={house} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        <section className="house">
            <img src={house2} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        <section className="house">
            <img src={house3} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        <section className="house">
            <img src={house4} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        <section className="house">
            <img src={house5} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        <section className="house">
            <img src={house6} alt="houseImage" srcset="" />
            <span className='details'>
                <h3>name</h3>
                <h4><Rating 
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                className='ratingClass'
                /></h4>
                <h4>30000</h4>
                <button>RENT</button>
            </span>
        </section>
        
    </div>
  )
}

export default ExistingEstablishment