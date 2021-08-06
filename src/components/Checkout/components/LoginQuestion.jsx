import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import PageLoginForm from './PageLoginForm';

import './LoginQuestion.css'
import { StoreContext } from '../../../store/StoreProvider';

const LoginQuestion = () => {
    const history = useHistory()

    const { user } = useContext(StoreContext)
    const { setRegisterOption } = useContext(StoreContext);

    if(user){history.push('/shopping-cart')}


    return (
        <div className="AuthorizationOptionsMenu">
                <button className='login-question__back-button' 
                    onClick ={()=>{history.push('/shopping-cart')}}>
                    <i class="fas fa-chevron-left"></i>   Wróć
                </button>
                <p className='login-question__title'>Nie masz konta ?</p>
                <div className="notRegistered">
                    <button className='login-question__guest-button' onClick={()=>{setRegisterOption(2)}}><Link to={'/checkout/zamowienie'}> Kontynuuj jako gość </Link></button>
                    <p className='login-question__dash-wrap'><span className="dash-gray"></span>lub<span className="dash-gray"></span> </p>
                    <button className='login-question__register-button' onClick={()=>{setRegisterOption(3)}}><Link to={'/rejestracja'}>Załóż konto</Link></button>
                </div>
                <div className="registered">
                    <p className='login-question__title'>Zaloguj się</p>
                    <PageLoginForm/>
                </div>
                <div className='login-question__benefits'>
                    <p className='login-question__subtitle'>Dlaczego warto mieć konto w CelGames</p>
                    <div className='login-question__benefit'>
                        <p className='login-question__benefit-icon'><i class="fas fa-fighter-jet"></i></p>
                        <p className='login-question__benefit-text'> zamawiaj szybciej</p>
                    </div>
                    <div className='login-question__benefit'>
                        <p className='login-question__benefit-icon'><i class="fas fa-list-ol"></i></p>
                        <p className='login-question__benefit-text'> sprawdzaj poprzednie zamówienia</p>
                    </div>
                    <div className='login-question__benefit'>
                        <p className='login-question__benefit-icon'><i class="fas fa-car-side"></i></p>
                        <p className='login-question__benefit-text'> śledź status zamówienia</p>
                    </div>
                    <div className='login-question__benefit'>
                        <p className='login-question__benefit-icon'><i class="fas fa-percent"></i></p>
                        <p className='login-question__benefit-text'> korzystaj z rabatów i promocji</p>
                    </div>
                </div>
            </div>

      );
}
 
export default LoginQuestion;