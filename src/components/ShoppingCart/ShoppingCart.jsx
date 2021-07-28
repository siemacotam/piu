import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';
import CartItem from './subcomponent/CartItem';


import './ShoppingCart.css'


const ShoppingCart = () => {
   

    const { shoppingCart,setShoppingCart } = useContext(StoreContext)

    const itemsElements = shoppingCart.map(item => <CartItem key={item.id} {...item}/>)

    const allItemsPrices = shoppingCart.map(item => Math.round(item.version * item.price * 100) / 100)

    const  orderSummary = shoppingCart.length > 0 ?
    allItemsPrices.reduce((a,b) => a+b)
    : 0

    useEffect(() => { window.scrollTo(0,0)}, [])
    

    return ( 
        <>
            <nav>
                <div className="shopping-cart__upper-panel-wrap">
                    <p className='shopping-cart__title'>Koszyk <span className='shopping-cart__title-span'>({shoppingCart.length})</span></p>
                    <button className='shopping-cart__button' onClick={() => {setShoppingCart([])}}>Wyczyść koszyk</button>
                </div> 
                <ul className='shopping-cart'>
                    {shoppingCart.length ===0 ? 'Koszyk jest pusty' : null}
                    {itemsElements}
                </ul>
            </nav>
            {shoppingCart.length > 0 
            ?   <div className='shopping-cart__payment-panel'>
                    <p>Łączna kwota:</p> <p>{Math.round(orderSummary *100) /100} zł </p>
                    <button className='shopping-cart__payment-panel__button'><Link to='/checkout'> Przejdź do dostawy</Link></button>
                </div>
                : null
            }
        </>
     );
}
 
export default ShoppingCart;