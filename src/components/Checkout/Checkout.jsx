import React, { useContext, useState } from 'react';

import {Link, Route } from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo2.png'
import LoginQuestion from './components/LoginQuestion';
import Summary from './components/Summary';

import './Checkout.css'
import PaymentAndDelivery from './components/PaymentAndDelivery';


const Checkout = () => {
    const [ step, setStep ] = useState(2)
    const { isMenuOpen , setIsMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);
    const { registerOption } = useContext(StoreContext);


    const hideMenu = () => {setIsMenuOpen(!isMenuOpen)}

    const stylesOfOption = (number) => {
        if(step < number) {
            return <div className="checkout__order-status-option to-do ">{number}</div>
        } else if (step === number) {
            return <div className="checkout__order-status-option">{number}</div>
        } else if (step > number ){
            return <div className="checkout__order-status-option done"><i className="fas fa-check-double"></i></div>
        }
    }

    const orderStatus =
     <div className="checkout__order-status">
         {stylesOfOption(1)}
         <span className="dash"></span>
         {stylesOfOption(2)}
         <span className="dash"></span>
         {stylesOfOption(3)}
         <span className="dash"></span>
         {stylesOfOption(4)}
    </div>


    return ( 
        <div className="checkout">
            <div className="checkout__logo-panel">
                <Link to='/piu' onClick={!isMenuOpen && hideMenu}><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <p className="checkout__logo-title">Dobrze Trafiłeś</p>
            </div>
            { user || registerOption === 2 ? orderStatus : null}

            <Route path='/checkout/logowanie' render={() => <LoginQuestion />}></Route>
            <Route path='/checkout/zamowienie' render={() => <PaymentAndDelivery setStep={setStep}/>}></Route>
            <Route path='/checkout/podsumowanie' render={() => <Summary/>}></Route>
        </div>
     );
}
 
export default Checkout;