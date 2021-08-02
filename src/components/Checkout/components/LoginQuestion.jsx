import React from 'react';

import PageLoginForm from './PageLoginForm';

const LoginQuestion = () => {
    return (
        <div className="AuthorizationOptionsMenu">
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
            </div>

      );
}
 
export default LoginQuestion;