import React, { useContext } from 'react';

import logo from '../../../images/logo.png'
import { StoreContext } from '../../../store/StoreProvider';


const CartItem = ({id , img, title, price, amount}) => {

    const { shoppingCart, setShoppingCart, items} = useContext(StoreContext)

    const handleDelete = () => {
        const item = items.find(item => item.id === id);
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
    }

    return ( 
        
         <li key={id} className='shopping-cart__element'>
            <img className='shopping-cart__image' src={logo} alt={title} />
            <h4 className='shopping-cart__element-title'>{title}</h4>
            <div className='shopping-cart__element-wrap'>
                <select className='shopping-cart__element-select' value={amount}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <button onClick={handleDelete} className='shopping-cart__delete-button'>usuń</button>
                <p className='shopping-cart__price'>{Math.floor(price * amount*100)/100} </p>
            </div>
         </li> 

     );
}
 
export default CartItem;