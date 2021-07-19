import React from 'react';
import { Link } from 'react-router-dom';

import '../AsideMenu.css'

const UserMenu = ({ isUserLogged }) => {
    return ( 
        <>
            <p className='aside-menu__title'>Panel użytkownika</p>
            <nav>
                <ul>
                    <li>
                        <Link className='aside-menu__link' to='/'>Sukienki w sprzedaży</Link>
                    </li>
                    {isUserLogged && <li><Link className='aside-menu__link' to='/my-dresses'>Moje zamówienia</Link> </li> }
                </ul>
            </nav>
        </>
     );
}
 
export default UserMenu;
