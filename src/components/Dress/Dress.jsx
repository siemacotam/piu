import React, { useContext } from 'react';

import './Dress.css'
import logo from '../../images/logo.png'
import { StoreContext, usersData } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const Dress = ({authors, img, id, isUserContext, price, title}) => {
    const { user, setUser, dresses } = useContext(StoreContext);
    const history = useHistory();

    const allAuthors = authors.join(', ')
    const isUserLogged = Boolean(user);

    const handleOnClick = () => {
    
        const dress = dresses.find(dress => dress.id === id);
        const userData = user.find(user => user);
        const userIndex = usersData.findIndex( iq => iq === userData)

        const hasUserCourseAlready = user[0].dresses.filter(i => i === id);
        if(hasUserCourseAlready.length !== 0){
            alert('masz juz ten kurs')
            return
        }
        userData.dresses.push(dress.id)
        setUser([userData])
        history.push('/my-dresses')

        usersData.splice(userIndex, 1, userData)
    }

    const shouldBeBuyButtonVisibile = isUserLogged && !isUserContext
    return ( 
        <li>
            <article className='dress-card'>
                <h3 className='dress-card__title'>{title}</h3>
                <img className='dress-card__image' src={logo} alt={title} />
                <p className='dress-card__authors'>{`Autorzy : ${allAuthors}`}</p>
                <p className='dress-card__price'>koszt: <span className='dress-card__price-number'>${price}</span> zł</p>
                {shouldBeBuyButtonVisibile && <button className='dress-card__button' onClick={handleOnClick }>Zakup </button>}
            </article>
        </li>
     );
}
 
export default Dress;