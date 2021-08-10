import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import './AsideMenu.css'
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';

const ADMIN_TYPE = 1

const AsideMenu = () => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const { user } = useContext(StoreContext);
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);

    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}
    const showMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const sectionStyle = isMenuOpen ? 'aside-menu aside-menu-hide' : 'aside-menu aside-menu-big'
 
    const adminMenuComponent = user && user.accessLevel === ADMIN_TYPE
    ? <AdminMenu hideMenu={hideMenu} />
    : null;

    useEffect(()=>{setIsShopOpen(false)},[isMenuOpen])

    return ( 
        <>
        <section className={sectionStyle}>
            <div className="aside-menu__nav-wrapper">

            <button className='aside-menu__burger-button' 
            onClick={isMenuOpen? showMenu : hideMenu}>X</button>

                <UserMenu isShopOpen={isShopOpen} setIsShopOpen={setIsShopOpen} isUserLogged={Boolean(user)} hideMenu={hideMenu} />
                {adminMenuComponent}
            </div>
        </section>
        </>
     );
}
 
export default AsideMenu;