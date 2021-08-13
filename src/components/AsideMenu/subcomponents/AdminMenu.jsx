import React from 'react';
import { Link } from 'react-router-dom';

import '../AsideMenu.css'

const AdminMenu = ({hideMenu, isAdminMenuOpen, setIsAdminMenuOpen, setIsShopOpen, setIsUserMenuOpen}) => {
    return ( 
        <>
            <div onClick={()=>{setIsAdminMenuOpen(!isAdminMenuOpen); setIsShopOpen(false); setIsUserMenuOpen(false) }} className='aside-menu__link'>Panel administratora
            <i className="fas fa-chevron-down"></i>
            <nav>
                <ul className={isAdminMenuOpen? 'aside-menu__admin-nav' : 'aside-menu__admin-nav admin-nav-hide'}>
                    <li>
                        <Link onClick={hideMenu} to='/menage-items' className='aside-menu__link'>Zarządzanie towarem</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
     );
}
 
export default AdminMenu;
