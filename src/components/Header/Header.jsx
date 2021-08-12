import React, { useContext, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router';

import {Link} from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo3.png'

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
    ? <Link to='/user-account'><i class="fas fa-user"></i></Link>
    : <i class="far fa-user"></i> ;

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

    const logoDiv = 
        <Link to='/piu' ><div className='header__logo-div'><img src={logo} alt="" /> </div></Link>

    const accountButton = 
                <div onClick={handleOnClick} className="header__button-wrap">
                    <p className='header__button'>{setProperlyLabel}</p>
                    <p className='header__button-text'>Twoje konto</p>
                </div>

    const cartButton = 
                 <div onClick={() => {history.push('/shopping-cart')}} className="header__button-wrap">
                    <i className="fas fa-shopping-cart header__button"><span className='header__button-number'>{shoppingCart.length}</span></i>
                    <p className='header__button-text'>Koszyk</p>
                </div>

    const hamburgerButton = (bigScreen) => {
                return <div className={'header__searchPanel-menu-wrap ' + bigScreen}>
                    <button className='header__searchPanel__button' onClick={isMenuOpen? showMenu : hideMenu}><i class="fa fa-bars" aria-hidden="true"></i></button>
                    <p className='header__searchPanel__text'>Menu</p>
                </div>}

    const searchForm = (bigScreen) => { 
                return <form className={'header__form ' + bigScreen} onSubmit ={handleSubmit}>
                    <label className='header__input-wrap'>
                        <i class="fas fa-search"></i>
                        <input className='header__input' type="text" placeholder='Czego szukasz?' value={searchedItem} onChange={handleChangeSearchedItem} ></input>
                        <button className='header__search-button'><i class="fas fa-search"></i></button>
                    </label>
                </form> }

    return ( 
        <header className='header'>
            <div className='header__mainPanel'>
                {hamburgerButton('bigScreen')}
                {logoDiv}
                {searchForm('bigScreen')}
                <div className="header__buttons-panel">
                    {accountButton}
                    <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
                    {cartButton}
                </div>
                {hamburgerButton()}
                {searchForm()}
            </div>
        </header>
     );
}

export default Header;