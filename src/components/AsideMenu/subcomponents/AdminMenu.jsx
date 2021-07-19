import React from 'react';
import { Link } from 'react-router-dom';

import '../AsideMenu.css'

const AdminMenu = () => {
    return ( 
        <>
            <p className='aside-menu__title'>Panel administratora</p>
            <nav>
                <ul>
                    <li>
                        <Link to='/menage-items' className='aside-menu__link'>zarządzanie towarem</Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default AdminMenu;
