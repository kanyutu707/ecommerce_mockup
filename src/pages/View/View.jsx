import React, { useEffect, useState } from 'react'
import house2 from '../../assets/house2.jpg'
import Navigations from '../../components/Navigations/Navigations'
import './View.css'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom'

const View = () => {
    const [rating, setRating] = useState(0)
    const [product, setProduct] = useState(null); 
    const { id } = useParams(); 
    console.log("id is", id);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
             
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

     
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleRating = (rate) => {
        setRating(rate)
    }

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    
    if (product === null) {
        return <p>Loading product...</p>
    }

    return (
        <div className='viewContainer'>
            <Navigations />
            <section className="view">
                <img src={product.image || house2} alt={product.title} />
                <span className="det">
                    <h3>{product.title}</h3>
                    <h4>{product.description}</h4>
                    <h4>
                        <Rating
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            className='ratingClass'
                        />
                    </h4>
                    <button>CALL</button>
                </span>
            </section>
        </div>
    )
}

export default View
