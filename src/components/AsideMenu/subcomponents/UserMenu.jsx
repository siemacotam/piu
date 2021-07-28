import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu }) => {
    const { isMenuOpen, setIsMenuOpen, shoppingCart } = useContext(StoreContext);
    return ( 
        <>
            <p className='aside-menu__title'>Witamy !</p>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Oferta + rozwiń kategorie</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/promotions'>Promocje</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/new'>Nowości</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/free-games'>Darmowe gry</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/search'>Szukaj</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/contact'>Pomoc i kontakt</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/shopping-cart'>Koszyk ({shoppingCart.length})</Link>

            {isUserLogged ?
            <>
                <p className='aside-menu__title'>Panel użytkownika</p>
                <nav>
                    <ul>
                        <li><Link onClick={hideMenu} className='aside-menu__link' to='/my-items'>Moje gry</Link> </li>
                        <li><Link onClick={hideMenu} className='aside-menu__link' to='/user-account'>Moje dane</Link> </li>
                    </ul>
                </nav> 
            </>
            :null }
        </>
     );
}
 
export default UserMenu;
