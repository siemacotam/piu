import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const RegisterForm = ({
    login = 'login',
    password ='password',
    nameAndSurname = 'Imię i nazwisko lub nazwa firmy',
    street = 'Ulica i numer',
    postCode = 'Kod pocztowy',
    city = 'Miejscowość',
    email = 'E-mail',
    phone = 'Telefon',
    goBack,
}) => {

    const { user } = useContext(StoreContext)

    const loginInput = 
    <div className="">
        <label className=''>
            <input className='' placeholder={login} onChange={() => {}} type="text" value={''}/>
        </label>
    </div>

    const passwordInput = 
    <div className="">
        <label className=''>
            <input className='' placeholder={password} onChange={() => {}} type="password" value={''}/>
        </label>
    </div>

    const buttonLabel = user ? 'Przejdź do podsumowania' : 'Zarejestruj'

    return ( 
        <div>
            <form className='' method='post' onSubmit={() => {}}>
                {!user && loginInput}
                {!user && passwordInput}
                <div className="">
                    <label className=''>
                        <input className='' placeholder={nameAndSurname} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>
                        <input className='' placeholder={street} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>
                        <input className='' placeholder={postCode} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>
                        <input className='' placeholder={city} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>
                        <input className='' placeholder={email} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <label className=''>
                        <input className='' placeholder={phone} onChange={() => {}} type="text" value={''}/>
                    </label>
                </div>
                <div className="">
                    <button className='' type='submit'>{buttonLabel}</button>
                </div>
            </form>
            <button onClick={goBack}>wróć</button>
        </div>
     );
}
 
export default RegisterForm;