import React, { useContext } from 'react';

import {Link, useHistory} from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo2.png'
import LoginQuestion from './components/LoginQuestion';

import './Checkout.css'


const Checkout = () => {
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const history = useHistory();


    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}

    return (   
        <div className="checkout">
            <div className="checkout__logo-panel">
                <Link to='/piu' onClick={!isMenuOpen && hideMenu}><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <p className="checkout__logo-title">Dobrze Trafiłeś</p>
            </div>
            <button onClick ={()=>{history.push('/shopping-cart')}}>Wróć</button>
            { !user && <LoginQuestion />}
        </div>
     );
}
 
export default Checkout;