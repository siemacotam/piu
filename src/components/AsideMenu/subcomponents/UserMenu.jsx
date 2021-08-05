import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu }) => {
    const { isMenuOpen, shoppingCart } = useContext(StoreContext);

    const unlogClick = () => {
        setUser(null); 
        if(!isMenuOpen){hideMenu()}
    }


    const { setUser } = useContext(StoreContext)
    return ( 
        <>
            <p className='aside-menu__title'>Witamy !</p>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer'>Oferta + rozwiń kategorie</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/promotions'>Promocje</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/new'>Nowości</Link>
            <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/free-games'>Darmowe gry</Link>
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
