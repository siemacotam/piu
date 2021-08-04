import React from 'react';
import { useHistory } from 'react-router';

import PageLoginForm from './PageLoginForm';

const LoginQuestion = () => {
    const history = useHistory()
    
    return (
        <div className="AuthorizationOptionsMenu">
            <button onClick ={()=>{history.push('/shopping-cart')}}>Wróć</button>
                <div className="notRegistered">
                    <p>Nie masz konta ?</p>
                    <button>kontynuuj jako gość</button>
                    <p><span></span>lub<span></span> </p>
                    <button>Załóż konto</button>
                </div>
                <div className="registered">
                    <p>Zaloguj się</p>
                    <PageLoginForm />
                </div>
                <div>
                    <h4>Dlaczego warto mieć konto w CelGames</h4>
                    <p>zamawiaj szybciej</p>
                    <p>sprawdzaj poprzednie zamówienia</p>
                    <p>śledź status zamówienia</p>
                    <p>korzystaj z rabatów i promocji</p>
                </div>
            </div>

      );
}
 
export default LoginQuestion;