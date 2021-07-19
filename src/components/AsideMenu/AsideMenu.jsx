import React, { useRef, useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import './AsideMenu.css'
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';

const ADMIN_TYPE = 1

const AsideMenu = () => {
    const { user } = useContext(StoreContext);
    const adminMenuComponent = user && user[0].accessLevel === ADMIN_TYPE
    ? <AdminMenu />
    : null;

    const sectionRef = useRef()

    const showMenu = () => {sectionRef.current.style.transform= 'translate(0%)'}
    const hideMenu = () => {sectionRef.current.style.transform= 'translate(-100%)'}

    return ( 
        <>
            <button className='aside-menu__burger' onClick ={showMenu}>M</button>
            <section className='aside-menu' ref={sectionRef}>
            <UserMenu isUserLogged={Boolean(user)} />
            {adminMenuComponent}
            <button className='aside-menu__burger' onClick ={hideMenu}>X</button>
        </section>
        </>
     );
}
 
export default AsideMenu;