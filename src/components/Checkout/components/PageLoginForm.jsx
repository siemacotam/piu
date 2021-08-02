import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import { usersData } from '../../../store/StoreProvider'; 


const PageLoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const {setUser} = useContext(StoreContext);

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = event => setPassword(event.target.value);

    const resetStateOfInputs = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const userLogin = usersData.filter(user => user.login === login ? user.login : null)
        const userPassword = usersData.filter(userPassword => userPassword.password === password ? userPassword : null)
        const activeUser = usersData.filter(user => user.login === login && user.password=== password ? user : null)

        if(userLogin.length && userPassword.length && activeUser ){
                    setUser(activeUser);
                    resetStateOfInputs();
            } else {
                setValidateMessage('zle dane');
            }
    }


    const validateMessageComponent = validateMessage.length ?
    <p className='login-form__validate-message'>{validateMessage}</p> 
    : null;

    return ( 
        <div>
            {validateMessageComponent}
            <form className='login-form' method='post' onSubmit={handleOnSubmit}>
                <div className="login-form__row">
                    <label className='login-form__label'>
                        Login:
                        <input className='login-form__input' onChange={handleOnChangeLogin} type="text" value={login}/>
                    </label>
                </div>
                <div className="login-form__row">
                <label className='login-form__label'>
                    Hasło:
                        <input className='login-form__input' onChange={handleOnChangePassword} type="password" value={password}/>
                    </label>
                </div>
                <div className="login-form__row">
                    <button className='login-form__button' type='submit'>Zaloguj</button>
                </div>
            </form>
            </div>
     );
}
 
export default PageLoginForm;