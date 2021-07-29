import React, { useContext, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';

import {Link} from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo.png'

import './Header.css'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useContext(StoreContext);

    const { shoppingCart } = useContext(StoreContext)

    const handleOnClose = () => setIsModalOpen(false)

    const handleOnClick = () => {
        if (Boolean(user)) {
            return
        } else {
            setIsModalOpen(true);
        }
    }

    const setProperlyLabel = Boolean(user) 
    ? <Link to='/user-account'><i class="fas fa-user-circle"></i></Link>
    : <i class="far fa-user-circle"></i> ;

    return ( 
        <header className='header'>
            <div className='header__mainPanel'>
                <Link to='/piu'><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <h1 className='header__title'>PGames</h1>
                <button className='header__button'><Link to='/shopping-cart'><i className="fas fa-shopping-cart">({shoppingCart.length})</i></Link></button>
                <button className='header__button' onClick={handleOnClick}>{setProperlyLabel}</button>
                <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
            </div>
            <div className='header__searchPanel'>
                <button className='header__searchPanel__button'><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </header>
     );
}

export default Header;