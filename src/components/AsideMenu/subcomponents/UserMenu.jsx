import React ,{ useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu, isShopOpen, setIsShopOpen }) => {
    const { isMenuOpen, shoppingCart } = useContext(StoreContext);
    const { setUser } = useContext(StoreContext)

    const unlogClick = () => {
        setUser(null); 
        if(!isMenuOpen){hideMenu()}
    }


    const openMenuStyles = isShopOpen ? 'aside-menu__link show' :'aside-menu__link hide'

    return ( 
        <>
            <p className='aside-menu__title'>Witamy !</p>
            <div onClick={()=>{setIsShopOpen(!isShopOpen)}} className='aside-menu__link'>Sklep  
            {isShopOpen 
            ?<i className="fas fa-chevron-up iconPadding"></i>
            : <i className="fas fa-chevron-down iconPadding"></i>}
            </div>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer'} >Wszytskie gry</Link>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer/fps'} >FPS</Link>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer/rpg'} >RPG</Link>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer/strategie'} >STRATEGIE</Link>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer/sport'} >SPORT</Link>
            <Link className={openMenuStyles} onClick={isMenuOpen ? null : hideMenu} to={'/offer/inne'} >INNE</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/promotions'>Promocje</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/new'>Nowości</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/free'>Darmowe gry</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/search'>Szukaj</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/contact'>Pomoc i kontakt</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/shopping-cart'>Koszyk ({shoppingCart.length})</Link>

            {isUserLogged ?
            <>
                <p className='aside-menu__title'>Panel użytkownika</p>
                <nav>
                    <ul>
                        <li><Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/my-items'>Moje gry</Link> </li>
                        <li><Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/user-account'>Moje dane</Link> </li>
                        <li><Link onClick={unlogClick} className='aside-menu__link' to='/'>Wyloguj</Link> </li>
                    </ul>
                </nav> 
            </>
            :null }
        </>
     );
}
 
export default UserMenu;
