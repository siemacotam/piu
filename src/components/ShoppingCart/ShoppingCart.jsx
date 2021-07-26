import React, { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';

import './ShoppingCart.css'


const ShoppingCart = () => {
   

    const { shoppingCart } = useContext(StoreContext)

    const cartItems = shoppingCart.map(item =>
        <li key={item.id}>
            {item.title} {item.price}
        </li>
        )
    
    console.log(cartItems)
   
    return ( 
        <nav>
            <ul>
                {cartItems}
            </ul>
        </nav>
     );
}
 
export default ShoppingCart;