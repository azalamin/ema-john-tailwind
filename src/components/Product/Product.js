import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name, price, ratings, seller, img} = product;

    return (
        <div className='border rounded-lg'>
            <div className='m-3'>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <div className='ml-4'>
                <p className='font-bold'>{name}</p>
                <p>Price: ${price}</p>
                <p className='mt-3'>Manufacturer: {seller}</p>
                <p className='mb-3'>Ratings: ✮{ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='bg-orange-400 block w-5/6 rounded-xl p-2 mx-auto mb-4 hover:bg-orange-600 hover:text-white'>Add To Cart</button>
        </div>
    );
};

export default Product;