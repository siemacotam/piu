import React, { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';
import CartItem from './subcomponent/CartItem';


import './ShoppingCart.css'


const ShoppingCart = () => {
   

    const { shoppingCart,setShoppingCart } = useContext(StoreContext)

    const itemsElements = shoppingCart.map(item => <CartItem key={item.id} {...item}/>)

    return ( 
        <>
            <nav>
                <p className='shopping-cart__title'>Koszyk ({shoppingCart.length})</p>
                <ul className='shopping-cart'>
                    {shoppingCart.length ===0 ? 'Koszyk jest pusty' : null}
                    {itemsElements}
                </ul>
                <button className='shopping-cart__button' onClick={() => {setShoppingCart([])}}>Wyczyść koszyk</button>
            </nav>
            <div>
                <p>łączna kwota : </p>
                <button>Przejdź do dostawy</button>
            </div>
        </>
     );
}
 
export default ShoppingCart;