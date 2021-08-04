import React, { useContext, useState } from 'react';

import {Link } from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo2.png'
import LoginQuestion from './components/LoginQuestion';

import './Checkout.css'
import PaymentAndDelivery from './components/PaymentAndDelivery';


const Checkout = () => {
    const [ step, setStep ] = useState(2)
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const { shoppingCart } = useContext(StoreContext)

    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const order ={
        items: shoppingCart,
        time: '',
    }

    const orderStatus = 
    <div className="checkout__order-status">
        <div className="checkout__order-status-option done"><i class="fas fa-check-double"></i></div>
        <span className="dash"></span>
        <div className="checkout__order-status-option">2</div>
        <span className="dash"></span>
        <div className="checkout__order-status-option to-do">3</div>
        <span className="dash"></span>
        <div className="checkout__order-status-option to-do">4</div>
    </div>

    return (   
        <div className="checkout">
            <div className="checkout__logo-panel">
                <Link to='/piu' onClick={!isMenuOpen && hideMenu}><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <p className="checkout__logo-title">Dobrze Trafiłeś</p>
            </div>
            {user && orderStatus }
            {!user && <LoginQuestion />}
            {user && step ===2 && <PaymentAndDelivery />}
        </div>
     );
}
 
export default Checkout;