import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    // Load Products from api
    useEffect( () => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, []);

    useEffect( () => {

        const savedData = [];
        const dbData = getStoredData()
        for (const id in dbData) {
            const quantity = dbData[id]
            const storedData = products.find(product => product.id === id);
            if (storedData) {
                savedData.push(storedData)
                storedData.quantity = quantity;
            }
        }
        setCart(savedData)
    }, [products])

    // Add products to cart
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    // Rest Cart
    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='grid grid-cols-5'>
            <div className='grid grid-cols-3 gap-8 col-span-4 p-6'>
                {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            
            {/* Order Summary */}
            <div className='col-span-1 order-container py-5'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;