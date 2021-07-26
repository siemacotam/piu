import React from 'react';
import { Link } from 'react-router-dom';

import '../AsideMenu.css'

const AdminMenu = ({hideMenu}) => {
    return ( 
        <>
            <p className='aside-menu__title'>Panel administratora</p>
            <nav>
                <ul>
                    <li>
                        <Link onClick={hideMenu} to='/menage-items' className='aside-menu__link'>Zarządzanie towarem</Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default AdminMenu;
