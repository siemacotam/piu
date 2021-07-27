import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';
import CartItem from './subcomponent/CartItem';


import './ShoppingCart.css'


const ShoppingCart = () => {
   

    const { shoppingCart,setShoppingCart } = useContext(StoreContext)

    const itemsElements = shoppingCart.map(item => <CartItem key={item.id} {...item}/>)

    const allItemsPrices = shoppingCart.map(item => Math.round(item.amount * item.price * 100) / 100)

    const  orderSummary = shoppingCart.length > 0 ?
    allItemsPrices.reduce((a,b) => a+b)
    : 0

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
                <p>łączna kwota : {orderSummary}  </p>
                <button><Link to='/checkout'> Przejdź do dostawy</Link></button>
            </div>
        </>
     );
}
 
export default ShoppingCart;