import React, { useContext, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router';

import {Link} from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo2.png'

import './Header.css'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchedItem, setSearchedItem] = useState('')

    const { setSearchValue } = useContext(StoreContext)
    const { user } = useContext(StoreContext);
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);
    const { shoppingCart } = useContext(StoreContext)

    const showMenu = () => {setIsMenuOpen(!isMenuOpen)}
    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const handleOnClose = () => setIsModalOpen(false)

    const handleOnClick = () => {
        if (Boolean(user)) {
            if(!isMenuOpen){hideMenu()}
            return
        } else {
            setIsModalOpen(true);
        }
    }

    const setProperlyLabel = Boolean(user) 
    ? <Link to='/user-account'><i class="fas fa-user-circle"></i></Link>
    : <i class="far fa-user-circle"></i> ;

    const handleChangeSearchedItem = (e) => {
        const item = e.target.value
        const itemSmall = item.toLowerCase()
        setSearchedItem(itemSmall)
    }

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(searchedItem)
        history.push('/search')
        setSearchedItem('')
    }

    const buttonFunction = !isMenuOpen ? hideMenu : null

    return ( 
        <header className='header'>
            <div className='header__mainPanel'>
                <Link to='/piu'  onClick={buttonFunction} 
                ><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <p className="header__title"></p>
                <button className='header__button' onClick={handleOnClick}>{setProperlyLabel}</button>
                <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
                <button className='header__button' onClick={buttonFunction}><Link to='/shopping-cart'><i className="fas fa-shopping-cart">({shoppingCart.length})</i></Link></button>
            </div>
            <div className='header__searchPanel'>
                <button className='header__searchPanel__button' onClick={isMenuOpen? showMenu : hideMenu}><i class="fa fa-bars" aria-hidden="true"></i></button>
                <form className='header__form' onSubmit ={handleSubmit}>
                    <label className='header__input-wrap'>
                        <i class="fas fa-search"></i>
                        <input className='header__input' type="text" placeholder='Czego szukasz?' value={searchedItem} onChange={handleChangeSearchedItem} ></input>
                    </label>
                </form>
            </div>
        </header>
     );
}

export default Header;