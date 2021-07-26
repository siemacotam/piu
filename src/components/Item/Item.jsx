import React, { useContext } from 'react';

import './Item.css'
import logo from '../../images/logo.png'
import { StoreContext, usersData } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const Item = ({authors, img, id, isUserContext, price, title}) => {
    const { user, setUser, items } = useContext(StoreContext);
    const history = useHistory();

    const allAuthors = authors.join(', ')
    const isUserLogged = Boolean(user);

    const handleOnClick = () => {
    
        const item = items.find(item => item.id === id);
        const userData = user.find(user => user);
        const userIndex = usersData.findIndex( iq => iq === userData)

        const hasUserCourseAlready = user[0].items.filter(i => i === id);
        if(hasUserCourseAlready.length !== 0){
            alert('masz juz ten kurs')
            return
        }
        userData.items.push(item.id)
        setUser([userData])
        history.push('/my-items')

        usersData.splice(userIndex, 1, userData)
    }

    const shouldBeBuyButtonVisibile = isUserLogged && !isUserContext
    return ( 
        <li>
            <article className='item-card'>
                <h3 className='item-card__title'>{title}</h3>
                <img className='item-card__image' src={logo} alt={title} />
                <p className='item-card__authors'>{`Autorzy : ${allAuthors}`}</p>
                <p className='item-card__price'>koszt: <span className='item-card__price-number'>${price}</span> zł</p>
                {shouldBeBuyButtonVisibile && <button className='item-card__button' onClick={handleOnClick }>Zakup </button>}
            </article>
        </li>
     );
}
 
export default Item;