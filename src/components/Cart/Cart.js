import React from 'react';

const Cart = ({cart, clearCart}) => {

    let total = 0;
    let shipping = 0;
    
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
 
    const tax = parseInt((total * .1))
    const grandTotal = total + tax + shipping;


    return (
        <div className='sticky top-0 py-3'>
            <h5 className='text-lg text-center'>Order Summary</h5>
                <div className='pl-4 pt-5'>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <p className='font-bold'>Grand Total: ${grandTotal}</p>
                    <div className='mt-5 pr-4 text-white'>
                        <button onClick={clearCart} className='block w-full bg-red-500 mt-3 py-2 hover:bg-red-600'>Clear Cart</button>
                        <button className='block w-full bg-orange-500 mt-3 py-2 hover:bg-orange-600'>Review Order</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;