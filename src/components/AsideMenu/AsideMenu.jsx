import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import './AsideMenu.css'
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';

const ADMIN_TYPE = 1

const AsideMenu = () => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const[isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
    const { user } = useContext(StoreContext);
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);

    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}
    const showMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const sectionStyle = isMenuOpen ? 'aside-menu-hide' : 'aside-menu-big'
 
    const adminMenuComponent = user && user.accessLevel === ADMIN_TYPE
    ? <AdminMenu isAdminMenuOpen={isAdminMenuOpen} setIsAdminMenuOpen={setIsAdminMenuOpen} hideMenu={hideMenu} setIsUserMenuOpen={setIsUserMenuOpen} setIsShopOpen={setIsShopOpen}/>
    : null;

    useEffect(()=>{setIsShopOpen(false)},[isMenuOpen])
    useEffect(()=>{setIsAdminMenuOpen(false)},[isMenuOpen])
    useEffect(()=>{setIsUserMenuOpen(false)},[isMenuOpen])



    // const showStyles = style ={{
    //     transform: 'translate(0%, -100px)',
    //     display: 'block',
    //     zIndex: '200',}}

    return ( 
        <>
        <section className={'aside-menu ' + sectionStyle}>
            <div className="aside-menu__nav-wrapper">

            <button className='aside-menu__burger-button' 
            onClick={isMenuOpen? showMenu : hideMenu}>X</button>

            
                <UserMenu isShopOpen={isShopOpen} setIsShopOpen={setIsShopOpen} isUserMenuOpen={isUserMenuOpen} setIsUserMenuOpen={setIsUserMenuOpen} isUserLogged={Boolean(user)} hideMenu={hideMenu} setIsAdminMenuOpen={setIsAdminMenuOpen} />
                {adminMenuComponent}
            

            </div>
        </section>
        </>
     );
}
 
export default AsideMenu;