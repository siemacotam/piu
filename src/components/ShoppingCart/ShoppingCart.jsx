import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { itemsData, StoreContext, usersData } from '../../store/StoreProvider';
import CartItem from './subcomponent/CartItem';


import './ShoppingCart.css'


const ShoppingCart = () => {

    const { user } = useContext(StoreContext)
   

    const { shoppingCart,setShoppingCart } = useContext(StoreContext)

    // const userHaveItems = user? user[0].items.map( i => i) : ''
    // const itemsInCart = shoppingCart.map(i => i.id)
    // const getDiffrence = ( userHaveItems, itemsInCart) => {
    //     return userHaveItems
    //     .filter(x => !itemsInCart.includes(x))
    //     .concat(itemsInCart.filter(x => !userHaveItems.includes(x)));
    //     // setShoppingCart()
    // }
    // const itemsIdToShow = getDiffrence(userHaveItems, itemsInCart)
    // const itemsIdToShow2 = itemsData.filter(i => i.id = itemsIdToShow.map(i => i))
    // console.log( itemsIdToShow2)
    // console.log(itemsIdToShow)

    // const unloggedCart = shoppingCart.map(item => <CartItem key={item.id} {...item}/>)
    // const loggedCart = itemsIdToShow.map(item => <CartItem key={item.id} {...item}/>)
    // const itemsElements =  user === null ? unloggedCart : loggedCart

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