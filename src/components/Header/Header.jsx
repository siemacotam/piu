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
        setSearchedItem(item)
    }

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(searchedItem)
        history.push('/search')
        setSearchedItem('')
    }

    console.log(searchedItem)

    return ( 
        <header className='header'>
            <div className='header__mainPanel'>
                <Link to='/piu'><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <h1 className='header__title'></h1>
                <button className='header__button'><Link to='/shopping-cart'><i className="fas fa-shopping-cart">({shoppingCart.length})</i></Link></button>
                <button className='header__button' onClick={handleOnClick}>{setProperlyLabel}</button>
                <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}></LoginForm>
            </div>
            <div className='header__searchPanel'>
                <button className='header__searchPanel__button' onClick={isMenuOpen? showMenu : hideMenu}><i class="fa fa-bars" aria-hidden="true"></i></button>
                <form className='header__form' onSubmit ={handleSubmit}>
                    <label className='header__input-wrap'>
                        <input className='header__input' type="text" placeholder='Czego szukasz?' value={searchedItem} onChange={handleChangeSearchedItem} ></input><i class="fas fa-search"></i>
                    </label>
                </form>
            </div>
        </header>
     );
}

export default Header;