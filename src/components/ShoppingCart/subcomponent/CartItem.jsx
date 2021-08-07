import React, { useContext, useState } from 'react';

import { itemValues, StoreContext } from '../../../store/StoreProvider';


const CartItem = ({id , img, title, price, discount, type, summary, version }) => {
    const [itemVersion, setItemVersion] = useState(1)

    const { shoppingCart, setShoppingCart, items} = useContext(StoreContext)

    const handleDelete = () => {
        const item = items.find(item => item.id === id);
        item.version --
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        setItemVersion(newValue)

        const item = shoppingCart.find(item => item.id === id);
        const index = shoppingCart.findIndex(i => i.id === item.id)

        const newShoppingCart =[...shoppingCart]
        newShoppingCart[index].version = newValue
        setShoppingCart(newShoppingCart)
    }

    const cuttedPrice =  Math.round((price - price * discount )*100)/100 
    const summaryOrCartPrice = summary 
    ? Math.round(price *version*100) /100
    : Math.round(price *itemVersion*100) /100

    return ( 
        
         <li key={id} className='shopping-cart__element'>
            <img className='shopping-cart__image' src={img} alt={title} />
            <h4 className='shopping-cart__element-title'>{title}</h4>
            <div className='shopping-cart__element-wrap'>
                {summary && <p>{itemValues[version]}</p> }
                {!summary && <select className='shopping-cart__element-select' value={itemVersion} onChange={handleChange}>
                    <option value="1">wersja podstawowa</option>
                    <option value="2">wersja rozszerzona</option>
                    <option value="3">full version + dodatki</option>
                </select>}
                {!summary && <button onClick={handleDelete} className='shopping-cart__delete-button'>usuń</button>}
                <p className='shopping-cart__price'>{type === 'cut' 
                ? itemVersion * cuttedPrice : summaryOrCartPrice}

                </p>
            </div>
         </li> 

     );
}
 
export default CartItem;