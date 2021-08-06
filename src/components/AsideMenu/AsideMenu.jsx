import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import './AsideMenu.css'
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';

const ADMIN_TYPE = 1

const AsideMenu = () => {
    const { user } = useContext(StoreContext);
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);

    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const sectionStyle = isMenuOpen ? 'aside-menu aside-menu-hide' : 'aside-menu aside-menu-big'
 
    const adminMenuComponent = user && user.accessLevel === ADMIN_TYPE
    ? <AdminMenu hideMenu={hideMenu} />
    : null;

    return ( 
        <>
        <section className={sectionStyle}>
            <div className="aside-menu__nav-wrapper">
                <UserMenu isUserLogged={Boolean(user)} hideMenu={hideMenu} />
                {adminMenuComponent}
            </div>
        </section>
        </>
     );
}
 
export default AsideMenu;