import React, { useContext, useState } from 'react';
import LoginForm from './LoginForm/LoginForm';

import { StoreContext } from '../store/StoreProvider';

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
            <div className='header__logo-wrapper'></div>
            <h1 className='header__title'>Super sklep</h1>
            <button onClick={handleOnClick}>{setProperlyLabel}</button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
        </header>
     );
}

export default Header;