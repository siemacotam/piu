import React, { useContext } from 'react';

import './Item.css'
import logo from '../../images/logo.png'
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const Item = ({img, id, isUserContext, price, title , rate, platform, distribution, version, pegi}) => {
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
        item.amount --
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
        // }
    }


    const hasUserItemAlready = shoppingCart.filter(i => i.id === id);

    const shopButton = () => {
        return ( 
        <>
            <p className='item-card__price'>{price} zł</p>
            <button key={id} className='item-card__button' 
                onClick={hasUserItemAlready.length === 0 ? handleOnClick: handleRemoveFromCart }>
                {hasUserItemAlready.length === 0 ?
                <i className="fas fa-cart-plus"></i> : <i className="fas fa-window-close"></i>}
            </button>
        </>
        )
    }

    const userItems = user === null
    ? ''
    : user[0].items.filter(i => i === id )
        
    const isButtonNeeded = userItems.length === 1 
    ? isUserContext? null : <p className='item-card__info'>Posiadasz juz tą grę</p> 
    : shopButton()


    return ( 
        <li className='item'>
            <article className='item-card'>
                <img className='item-card__image' src={img} alt ={title}/>
                <h3 className='item-card__title'>{title}</h3>
                <p className='item-card__rate'>opinie</p>
                <p>Platforma:{platform}</p>
                <p>Dystrybucja cyfrowa:{distribution}</p>
                <p>Wersja:{version}</p>
                <p>PEGI:{pegi} </p>
                {isUserContext 
                    ? <button className='item-card__button' >Play</button>
                    : null
                }
                {isButtonNeeded }



            </article>
        </li>
     );
}
 
export default Item;