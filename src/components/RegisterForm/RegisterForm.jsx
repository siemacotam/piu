import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import { usersData } from '../../store/StoreProvider';

import './RegisterForm.css'

const RegisterForm = ({
    login = '',
    password ='',
    nameAndSurname = '',
    street = '',
    postCode = '',
    city = '',
    email = '',
    phone = '',
    setChangeAdress,
    handleNextStepClick,
}) => {

    const [userLogin, setUserLogin] = useState(login);
    const [userPassword, setUserPassword] = useState(password);
    const [userName, setUserName] = useState(nameAndSurname);
    const [userAdress, setUserAdress] = useState(street)
    const [userPostcode, setUserPostcode] = useState(postCode);
    const [userCity, setUserCity] = useState(city);
    const [userEmail, setUserEmail] = useState(email);
    const [userPhone, setUserPhone] = useState(phone);

    const { user, setUser, registerOption, setUnregisteredUser } = useContext(StoreContext);

    const history = useHistory()

    const whereToGoNext = () => {
        if(registerOption === 1){
            history.push('/')
        }  else if( registerOption === 3 ){
            history.push('/checkout/zamowienie')
        }  
    }

    const handleLoginChange = (e) => {
        const data = e.target.value;
        setUserLogin(data)
    }
    const handlePasswordChange = (e) => {
        const data = e.target.value;
        setUserPassword(data)
    }
    const handleNameChange = (e) => {
        const data = e.target.value;
        setUserName(data)
    }
    const handleAdressChange = (e) => {
        const data = e.target.value;
        setUserAdress(data)
    }
    const handlePostcodeChange = (e) => {
        const data = e.target.value;
        setUserPostcode(data)
    }
    const handleCityChange = (e) => {
        const data = e.target.value;
        setUserCity(data)
    }
    const handleEmailChange = (e) => {
        const data = e.target.value;
        setUserEmail(data)
    }
    const handlePhoneChange = (e) => {
        const data = e.target.value;
        setUserPhone(data)
    }

    const loginInput = 
    <div className="">
        <label className=''>Login:
            <input className='register__input' placeholder={login} onChange={handleLoginChange} type="text" value={userLogin}/>
        </label>
    </div>

    const passwordInput = 
    <div className="">
        <label className=''>Hasło:
            <input className='register__input' placeholder={password} onChange={handlePasswordChange} type="password" value={userPassword}/>
        </label>
    </div>

    const handleSubmit = (e) => {
        e.preventDefault();

        if(userName && userAdress && userPostcode && userCity && userEmail && userPhone){
        
        const newUser = {
            accessLevel: 0,
            nameAndSurname: userName,
            email: userEmail,
            phone: userPhone,
            street: userAdress,
            postCode: userPostcode,
            city: userCity,
            items: [],
            login: userLogin,
            password: userPassword,
            orders: [],
        }

        if(!user && registerOption === 2){
            const userData = {
                nameAndSurname: userName,
                email: userEmail,
                phone: userPhone,
                street: userAdress,
                postCode: userPostcode,
                city: userCity,
            }
            setUnregisteredUser(userData)
            handleNextStepClick(userData)
        } else if(!user){
            usersData.push(newUser);
            setUser(newUser)
            whereToGoNext()
        } else {
            const newDataUser = user
            newDataUser.nameAndSurname = userName
            newDataUser.email = userEmail
            newDataUser.phone = userPhone
            newDataUser.adress = userAdress
            newDataUser.postcode = userPostcode
            newDataUser.city = userCity
            
            const userIndex = usersData.findIndex(i => i.login === newDataUser.login)
            usersData.splice(userIndex , 1, newDataUser)
            setUser(newDataUser)
            whereToGoNext()
            setChangeAdress(false)
        }
    } else {
        alert('uzupelnij wszystkie dane')
    }
    }

    const buttonLabel = user || registerOption === 2 ? 'Zapisz' : 'Zarejestruj'

    return ( 
        <div className='register'>
            <form className='' method='post' id='myForm' onSubmit={handleSubmit}>
                {(!user && registerOption !== 2) && loginInput}
                {(!user && registerOption !== 2) && passwordInput}
                <div className="">
                    <label className='register__label'>Imię i nazwisko lub nazwa firmy:
                        <input className='register__input' placeholder={nameAndSurname} onChange={handleNameChange} type="text" value={userName}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>Adres:
                        <input className='register__input' placeholder={street} onChange={handleAdressChange} type="text" value={userAdress}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>Kod pocztowy:
                        <input className='register__input' placeholder={postCode} onChange={handlePostcodeChange} type="text" value={userPostcode}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>Miasto:
                        <input className='register__input' placeholder={city} onChange={handleCityChange} type="text" value={userCity}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>Email:
                        <input className='register__input' placeholder={email} onChange={handleEmailChange} type="text" value={userEmail}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>Numer telefonu:
                        <input className='register__input' placeholder={phone} onChange={handlePhoneChange} type="text" value={userPhone}/>
                    </label>
                </div>
                <div className="register__button-wrap">
                    {registerOption !== 2 && <button className='register__button' type='submit'>{buttonLabel}</button>}
                </div>
            </form>
        </div>
     );
}
 
export default RegisterForm;