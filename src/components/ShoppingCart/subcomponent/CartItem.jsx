import React, { useContext, useState } from 'react';

import logo from '../../../images/logo.png'
import { StoreContext } from '../../../store/StoreProvider';


const CartItem = ({id , img, title, price, amount}) => {
    const [itemAmount, setItemAmount] = useState(1)

    const { shoppingCart, setShoppingCart, items} = useContext(StoreContext)

    const handleDelete = () => {
        const item = items.find(item => item.id === id);
        item.amount --
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        setItemAmount(newValue)

        const item = shoppingCart.find(item => item.id === id);
        const index = shoppingCart.findIndex(i => i.id === item.id)

        const newShoppingCart =[...shoppingCart]
        newShoppingCart[index].amount = newValue
        setShoppingCart(newShoppingCart)
    }

    return ( 
        
         <li key={id} className='shopping-cart__element'>
            <img className='shopping-cart__image' src={img} alt={title} />
            <h4 className='shopping-cart__element-title'>{title}</h4>
            <div className='shopping-cart__element-wrap'>
                <select className='shopping-cart__element-select' value={itemAmount} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={handleDelete} className='shopping-cart__delete-button'>usuń</button>
                <p className='shopping-cart__price'>{Math.round(price * itemAmount *100) / 100} zł </p>
            </div>
         </li> 

     );
}
 
export default CartItem;