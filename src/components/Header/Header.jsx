import React, { useContext, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';

import {Link} from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo.png'

import './Header.css'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useContext(StoreContext);

    const handleOnClose = () => setIsModalOpen(false)

    const handleOnClick = () => {
        if (Boolean(user)) {
            setUser(null)
        } else {
            setIsModalOpen(true);
        }
    }

    const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się' ;

    return ( 
        <header className='header'>
            <Link to='/piu'><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
            <h1 className='header__title'>Piu</h1>
            <button className='header__button' onClick={handleOnClick}>{setProperlyLabel}</button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
        </header>
     );
}

export default Header;