import React, { useContext, useEffect, useState } from 'react';
// import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';
import Modal from '../Modal/Modal';
import { usersData } from '../../store/StoreProvider';

import './LoginForm.css'

const LoginForm = ({handleOnClose, isModalOpen}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const {setUser} = useContext(StoreContext);

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = event => setPassword(event.target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose()
    }

    const resetStateOfInputs = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');
    }

    // const handleOnSubmit =async event => {
    //     event.preventDefault();
    //     const {data, status} = await request.post(
    //         '/users',
    //         {login, password}
    //     );

    //     if(status === 200){
    //         setUser(data.user);
    //         resetStateOfInputs();
    //         handleOnClose();
    //     } else {
    //         setValidateMessage(data.message);
    //     }
    // }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const userLogin = usersData.filter(user => user.login === login ? user.login : null)
        const userPassword = usersData.filter(userPassword => userPassword.password === password ? userPassword : null)
        const activeUser = usersData.filter(user => user.login === login && user.password=== password ? user : null)

        if(userLogin.length && userPassword.length && activeUser ){
                    setUser(activeUser);
                    resetStateOfInputs();
                    handleOnClose();
            } else {
                setValidateMessage('zle dane');
            }
    }

    useEffect(() => {
        if(isModalOpen){
        resetStateOfInputs();
        }
    },[isModalOpen]);

    const validateMessageComponent = validateMessage.length ?
    <p className='login-form__validate-message'>{validateMessage}</p> 
    : null;

    return ( 
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeClouseOnOutsideClick={true} >
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
                    <button className='login-form__button' onClick={handleOnCloseModal} type='button'>Anuluj</button>
                </div>
            </form>
        </Modal>
     );
}
 
export default LoginForm;