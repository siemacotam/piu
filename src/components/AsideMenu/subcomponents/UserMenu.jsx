import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../../store/StoreProvider';
import '../AsideMenu.css'

const UserMenu = ({ isUserLogged, hideMenu, isShopOpen, setIsShopOpen, isUserMenuOpen, setIsUserMenuOpen, setIsAdminMenuOpen }) => {
    const { isMenuOpen, shoppingCart } = useContext(StoreContext);
    const { setUser } = useContext(StoreContext)

    const unlogClick = () => {
        setUser(null); 
        if(!isMenuOpen){hideMenu()}
    }
    // const openMenuStyles = isShopOpen ? 'aside-menu__link show' :'aside-menu__link hide'

    const menuStyles = isShopOpen ? 'aside-menu__offer-list show' : 'aside-menu__offer-list hide'
    console.log(isUserMenuOpen)

    return ( 
        <>
            <div className="aside-menu__nav-wrapper">
                <p className='aside-menu__title'>Witamy !</p>
                <div onClick={()=>{setIsShopOpen(!isShopOpen); setIsAdminMenuOpen(false); setIsUserMenuOpen(false)}} className='aside-menu__link'>Sklep  
                {/* {isShopOpen 
                ?<i className="fas fa-chevron-up iconPadding"></i>
                : <i className="fas fa-chevron-down iconPadding"></i>} */}
                <i class="fas fa-chevron-right" style={{position: 'relative', right: '-30px'}}></i>

                <div className={menuStyles}>
                    <p className='aside-menu__title'>Co Cię interesuje ?</p>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer'} >Wszytskie gry</Link>
                    <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/promotions'>Promocje</Link>
                    <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/new'>Nowości</Link>
                    <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/offer/free'>Darmowe gry</Link>
                    <p className='aside-menu__title'>Lub wybierz wg kategorii</p>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer/fps'} >FPS</Link>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer/rpg'} >RPG</Link>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer/strategie'} >STRATEGIE</Link>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer/sport'} >SPORT</Link>
                    <Link className='aside-menu__link' onClick={isMenuOpen ? null : hideMenu} to={'/offer/inne'} >INNE</Link>
                    <br />
                    <div onClick={()=>{setIsShopOpen(!isShopOpen)}} className='aside-menu__link'>
                        <i class="fas fa-chevron-left" style={{position: 'relative', left: '-30px'}}></i>
                        Powrót  
                    </div>
                </div>

                </div>
                
                <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/search'>Szukaj</Link>
                <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/contact'>Pomoc i kontakt</Link>
                <Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/shopping-cart'>Koszyk ({shoppingCart.length})</Link>
            </div>

            {isUserLogged ?
            <>
                <div onClick={()=>{setIsUserMenuOpen(!isUserMenuOpen); setIsShopOpen(false); setIsAdminMenuOpen(false)}} className='aside-menu__link'>Panel użytkownika
                <i className="fas fa-chevron-down"></i>
                <nav>
                    <ul className={ isUserMenuOpen ? 'aside-menu__user-nav' : 'aside-menu__user-nav user-nav-hide'}>
                        <li><Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/my-items'>Moje gry</Link> </li>
                        <li><Link onClick={isMenuOpen ? null : hideMenu} className='aside-menu__link' to='/user-account'>Moje dane</Link> </li>
                        <li><Link onClick={unlogClick} className='aside-menu__link' to='/'>Wyloguj</Link> </li>
                    </ul>
                </nav> 
                </div>
            </>
            :null }
        </>
     );
}
 
export default UserMenu;
