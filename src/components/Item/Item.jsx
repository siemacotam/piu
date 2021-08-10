import React, { useContext } from 'react';

import './Item.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import { itemValues } from '../../store/StoreProvider';

const Item = ({img, id, isUserContext, price, title , rate, platform, distribution, language, pegi, type, discount, link, version, short}) => {
    const { user, items } = useContext(StoreContext);

    const { shoppingCart, setShoppingCart } = useContext(StoreContext)

    const handleOnClick = () => {
    
        const item = items.find(item => item.id === id);
        const hasUserItemAlready = shoppingCart.filter(i => i.id === id);
        if(hasUserItemAlready.length !== 0){
            alert('Produkt znajduje sie juz w koszyku')
            return
        }

        item.amount ++
        setShoppingCart( [...shoppingCart,item])

    }

    const handleRemoveFromCart = () => {
        const item = items.find(item => item.id === id);
        item.amount --
        const newShoppingCart = shoppingCart.filter(i => i.id !== item.id)
        setShoppingCart(newShoppingCart)
        // }
    }

    const hasUserItemAlready = shoppingCart.filter(i => i.id === id);

    const shopButton = () => {
        return ( 
        <>
            <div className='item-card__price'>{type ==='cut' 
            ? 
            <><p style={{textDecoration: 'line-through'}}>stara cena {price} zł</p>
            <p>nowa cena {Math.round((price - price * discount )*100)/100} zł</p></>
            
            : <p>{price} zł</p> }</div>
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
    : user.items.filter(i => i === id )
        
    const isButtonNeeded = userItems.length === 1 
    ? isUserContext? null : <button className='item-card__button' ><Link style={{textDecoration: 'none', color: 'white'}} to={link}>Play</Link></button>
    : shopButton()


    return ( 
        <li className='item'>
            <article className='item-card'>
                {!short && type === 'new' ? <p className='item-card__head-new'>NOWOŚĆ</p> : null}
                {!short && type === 'cut' ? <p className='item-card__head-cut'>PROMOCJA -{discount * 100}% !</p>: null}
                <img className='item-card__image' src={img} alt ={title}/>
                <h3 className='item-card__title'>{title}</h3>
                <p className='item-card__rate'>opinie</p>
                <p className='item-card__text'>Platforma:{platform}</p>
                <p className='item-card__text'>Dystrybucja cyfrowa:{distribution}</p>
                <p className='item-card__text'>Wersja:{language}</p>
                <p className='item-card__text'>PEGI:{pegi} </p>
                {isUserContext && <p>{itemValues[version]}</p> }
                {isUserContext && <button className='item-card__button' ><Link style={{textDecoration: 'none', color: 'white'}} to={link}>Play</Link></button>

                }
                {isButtonNeeded }



            </article>
        </li>
     );
}
 
export default Item;