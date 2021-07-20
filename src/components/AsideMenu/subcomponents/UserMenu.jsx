import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu }) => {
    const { isMenuOpen, setIsMenuOpen } = useContext(StoreContext);
    return ( 
        <>
            <p className='aside-menu__title'>Panel użytkownika</p>
            <nav>
                <ul>
                    <li>
                        <Link onClick={hideMenu} className='aside-menu__link' to='/'>Sukienki w sprzedaży</Link>
                    </li>
                    {isUserLogged && <li><Link onClick={hideMenu} className='aside-menu__link' to='/my-dresses'>Moje zamówienia</Link> </li> }
                </ul>
            </nav>
        </>
     );
}
 
export default UserMenu;
