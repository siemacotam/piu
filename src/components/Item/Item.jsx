import React, { useContext } from 'react';

import './Item.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const Item = ({img, id, isUserContext, price, title , rate, platform, distribution, language, pegi, type, discount, link}) => {
    const { user, setUser, items } = useContext(StoreContext);
    const history = useHistory();

    const { shoppingCart, setShoppingCart } = useContext(StoreContext)
    // const allAuthors = authors.join(', ')
    const isUserLogged = Boolean(user);

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
    : user[0].items.filter(i => i === id )
        
    const isButtonNeeded = userItems.length === 1 
    ? isUserContext? null : <button className='item-card__button' ><Link style={{textDecoration: 'none', color: 'white'}} to={link}>Play</Link></button>
    : shopButton()


    return ( 
        <li className='item'>
            <article className='item-card'>
                {type === 'new' ? <p className='item-card__head-new'>NOWOŚĆ</p> : null}
                {type === 'cut' ? <p className='item-card__head-cut'>PROMOCJA -20% !</p>: null}
                <img className='item-card__image' src={img} alt ={title}/>
                <h3 className='item-card__title'>{title}</h3>
                <p className='item-card__rate'>opinie</p>
                <p>Platforma:{platform}</p>
                <p>Dystrybucja cyfrowa:{distribution}</p>
                <p>Wersja:{language}</p>
                <p>PEGI:{pegi} </p>
                {isUserContext 
                    ? <button className='item-card__button' ><Link style={{textDecoration: 'none', color: 'white'}} to={link}>Play</Link></button>
                    : null
                }
                {isButtonNeeded }



            </article>
        </li>
     );
}
 
export default Item;