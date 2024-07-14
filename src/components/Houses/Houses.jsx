import React, { useEffect, useState } from 'react'
import './Houses.css'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'


const Houses = () => {
    const [rating, setRating] = useState(0)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data);
                console.log(products)
            } catch (error) {

            }
        };
        fetchProducts();
    }, []);


    const handleRating = (rate) => {
        setRating(rate)
    }

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    return (
        <div className='houseContainer'>
            {products.map((product) => (

                <section className="house" key={product.id}>
                    <img src={product.image} alt="houseImage" srcset="" className='myImage' />
                    <span className='details'>
                        <h3>{product.title}</h3>

                        <h4>  <Rating
                            onChange={(rate) => handleRating(product.rating.rate)}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            className='ratingClass'
                        /></h4>
                        <h4>{product.price}</h4>
                        <Link to={`/View/${product.id}`}>VIEW</Link>
                    </span>
                </section>
            ))}



        </div>
    )
}

export default Houses