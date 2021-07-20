import React, { useRef, useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import './AsideMenu.css'
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';

const ADMIN_TYPE = 1

const AsideMenu = () => {
    // const [flag , setFlag] = useState(true)
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const sectionRef = useRef()

    const showMenu = () => {sectionRef.current.style.transform= 'translate(0%)'; sectionRef.current.style.display= 'block';setIsMenuOpen(!isMenuOpen)}
    const hideMenu = () => {sectionRef.current.style.transform= 'translate(-100%)';sectionRef.current.style.display= 'none';setIsMenuOpen(!isMenuOpen)}

    
    const adminMenuComponent = user && user[0].accessLevel === ADMIN_TYPE
    ? <AdminMenu hideMenu={hideMenu} />
    : null;

    return ( 
        <>
        {isMenuOpen ?
        <button className='aside-menu__burger' onClick ={showMenu}>M</button>:
        <button className='aside-menu__burger' onClick ={hideMenu}>X</button>
        }
        <section className='aside-menu' ref={sectionRef}>
            <div className="aside-menu__nav-wrapper">
                <UserMenu isUserLogged={Boolean(user)} hideMenu={hideMenu} />
                {adminMenuComponent}
            </div>
        </section>
        </>
     );
}
 
export default AsideMenu;