import React, { useContext, useState } from 'react';

import {Link, Route } from 'react-router-dom'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../images/logo2.png'
import LoginQuestion from './components/LoginQuestion';
import Summary from './components/Summary';

import './Checkout.css'
import PaymentAndDelivery from './components/PaymentAndDelivery';
import Bank from './components/Bank';
import OrderReady from './components/OrderReady';


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
            return <div className="checkout__order-status-option done"><i class="fas fa-check"></i></div>
        }
    }

    const orderStatus =
     <div className="checkout__order-status">
         <div className='checkout__order-status-point'>{stylesOfOption(1)}<p className='checkout__order-status-name'>Koszyk</p> </div>
         <span className="dash"></span>
         <div className='checkout__order-status-point'>{stylesOfOption(2)}<p className='checkout__order-status-name'>Dostawa i płatność</p> </div>
         <span className="dash"></span>
         <div className='checkout__order-status-point'>{stylesOfOption(3)}<p className='checkout__order-status-name'>Zamówienie</p> </div>
         <span className="dash"></span>
         <div className='checkout__order-status-point'>{stylesOfOption(4)}<p className='checkout__order-status-name'>Gotowe</p> </div>
    </div>


    return ( 
        <div className="checkout">
            { step !==3.5 && <div className="checkout__logo-panel">
                <Link to='/piu' onClick={!isMenuOpen && hideMenu}><div className='header__logo-wrapper'><img src={logo} alt="" /> </div></Link>
                <p className="checkout__logo-title">Dobrze Trafiłeś</p>
            </div>}
            { (user || registerOption === 2) && (step !== 3.5)? orderStatus : null}

            <Route path='/checkout/logowanie' render={() => <LoginQuestion />}></Route>
            <Route path='/checkout/zamowienie' render={() => <PaymentAndDelivery setStep={setStep} />}></Route>
            <Route path='/checkout/podsumowanie' render={() => <Summary setStep={setStep}/>}></Route>
            <Route path='/checkout/bank' render={() => <Bank setStep={setStep}/>}></Route>
            <Route path='/checkout/gotowe' render={() => <OrderReady setStep={setStep} />}></Route>
        </div>
     );
}
 
export default Checkout;