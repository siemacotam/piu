import React, { useContext } from 'react';

import './Item.css'
import logo from '../../images/logo.png'
import { StoreContext, usersData } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const Item = ({authors, img, id, isUserContext, price, title , rate, platform, distribution, version, pegi}) => {
    const { user, setUser, items } = useContext(StoreContext);
    const history = useHistory();

    const { shoppingCart, setShoppingCart } = useContext(StoreContext)
    // const allAuthors = authors.join(', ')
    const isUserLogged = Boolean(user);

    const handleOnClick = () => {
    
        const item = items.find(item => item.id === id);
        // const userData = user.find(user => user);
        // const userIndex = usersData.findIndex( id => id === userData)
        
        // const hasUserItemAlready = user[0].items.filter(i => i === id);
        // if(hasUserItemAlready.length !== 0){
        //     alert('masz juz ten kurs')
        //     return
        // }

        const hasUserItemAlready = shoppingCart.filter(i => i.id === id);
        if(hasUserItemAlready.length !== 0){
            alert('Produkt znajduje sie juz w koszyku')
            return
        }


        // userData.items.push(item.id)
        // setUser([userData])
        // history.push('/my-items')

        // usersData.splice(userIndex, 1, userData)

        item.amount ++
        // shoppingCart.push(item)
        setShoppingCart( [...shoppingCart,item])
        // setUser([userData])
        // history.push('/my-items')

        // usersData.splice(userIndex, 1, userData)

    }

    const handleRemoveFromCart = () => {
        const item = items.find(item => item.id === id);
        // const removeItemFromCart = shoppingCart.filter(i => i.id === item.id )
        // if(removeItemFromCart.length){
            
        // const index = shoppingCart.findIndex(i => i.id === item.id)
        // const newShoppingCartStatus = shoppingCart.splice(index, 1)
        // console.log(index, newShoppingCartStatus)
        // setShoppingCart(newShoppingCartStatus)
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
        // }
    }

    const hasUserItemAlready = shoppingCart.filter(i => i.id === id);
    return ( 
        <li>
            <article className='item-card'>
                <img className='item-card__image' src={logo} alt={title} />
                <h3 className='item-card__title'>{title}</h3>
                <p className='item-card__rate'>opinie</p>
                <p>Platforma:{platform}</p>
                <p>Dystrybucja cyfrowa:{distribution}</p>
                <p>Wersja:{version}</p>
                <p>PEGI:{pegi} </p>
                {/* <p className='item-card__authors'>{`Autorzy : ${allAuthors}`}</p> */}
                <p className='item-card__price'>${price}</p>
                <button key={id} className='item-card__button' onClick={hasUserItemAlready.length === 0 ? handleOnClick: handleRemoveFromCart }>
                    {hasUserItemAlready.length === 0 ?
                    <i class="fas fa-cart-plus"></i> : <i class="fas fa-window-close"></i>}
                </button>
            </article>
        </li>
     );
}
 
export default Item;