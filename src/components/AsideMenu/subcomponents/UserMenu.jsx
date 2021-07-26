import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu }) => {
    const { isMenuOpen, setIsMenuOpen } = useContext(StoreContext);
    return ( 
        <>
            <p className='aside-menu__title'>Witamy !</p>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Oferta + rozwiń kategorie</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Promocje</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Nowości</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Szukaj</Link>
            <Link onClick={hideMenu} className='aside-menu__link' to='/'>Pomoc i kontakt</Link>
            {isUserLogged ?
            <>
                <p className='aside-menu__title'>Panel użytkownika</p>
                <nav>
                    <ul>
                        <li><Link onClick={hideMenu} className='aside-menu__link' to='/my-items'>Moje zamówienia</Link> </li>
                        <li><Link onClick={hideMenu} className='aside-menu__link' to='/my-items'>Moje dane</Link> </li>
                    </ul>
                </nav> 
            </>
            :null }
        </>
     );
}
 
export default UserMenu;
