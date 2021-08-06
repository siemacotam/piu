import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import RegisterForm from '../../RegisterForm/RegisterForm';

import './PaymentAndDelivery.css'


const PaymentAndDelivery = () => {
    const [paymentMethod, setPaymentMethod] = useState('blik')
    const [changeAdress, setChangeAdress] = useState(false)
    const { user } = useContext(StoreContext)
    const { registerOption, setRegisterOption } = useContext(StoreContext);


    const handleChange = (e) => {
        const paymentOption = e.target.name
        setPaymentMethod(paymentOption)
    }

    useEffect(()=>{window.scrollTo(0,0)},[])

    // const adressInfo =
    // <div>
    //     <p>{user.nameAndSurname}</p>
    //     <p>{user.street}</p>
    //     <p>{user.postCode}</p>
    //     <p>{user.city}</p>
    //     <p>{user.email}</p>
    //     <p>{user.phone}</p>
    //     <button onClick={() =>{setChangeAdress(!changeAdress); setRegisterOption(4);}}>Zmień dane do wysyłki</button>
    // </div>

    // const changeAdressInfo = 
    // <>
    //     <RegisterForm 
    //         nameAndSurname = {user.nameAndSurname}
    //         street = {user.street}
    //         postCode = {user.postCode}
    //         city = {user.city}
    //         email = {user.email}
    //         phone = {user.phone}
    //     />
    // </>
    

    return ( 
        <div className='PaD__wrap'>
            <h3 className='PaD__title'>Dostwa i płatność</h3>
            <div>
                <div>
                    <h5 className='PaD__subtitle'>1. Sposób dostawy</h5>
                    <div className="PaD__shipment">
                        <label className='PaD__label'>
                            <input type="checkbox" name="email" checked onChange={() => {}}/>
                            <div>
                                <div>
                                    <p>E-mail</p>
                                    <p>(bezpłatnie)</p>
                                </div>
                                <div>
                                    <p>Klucz produktu otrzymasz w wiadomości e-mail po zaksiegowaniu wpłaty</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <h5 className='PaD__subtitle'>2. Metoda płatoności</h5>
                    <div className="PaD__options-wrapper">
                            <div className={paymentMethod === 'blik' ? 'PaD__option checked' : 'PaD__option'}>
                                <label  className='PaD__label'>
                                    <input type="checkbox" name="blik" checked={paymentMethod === 'blik'} onChange={handleChange}/>
                                    <div>
                                        <p>Blik</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="fas fa-phone-square"></i></p>
                                </label>
                                <div className={paymentMethod === 'blik' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Sfinalizuj tranzakcje używając kodu BLIK.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'card' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="card" checked={paymentMethod === 'card'} onChange={handleChange}/>
                                    <div>
                                        <p>Karta płatnicza online</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="far fa-credit-card"></i></p>
                                </label>
                                <div className={paymentMethod === 'card' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zostaniesz przeniesiony na stronę swojego banku gdzie sfinalizujesz tranzakcję.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'transfer' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="transfer" checked={paymentMethod === 'transfer'} onChange={handleChange}/>
                                    <div>
                                        <p>Przelew gotówkowy</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="fas fa-money-check"></i></p>
                                </label>
                                <div className={paymentMethod === 'transfer' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zamówienie wyślemy, kiedy otrzymamy od Ciebie wpłatę.</p>
                                    <p>Pamiętaj, żeby w tytule przelewu wpisać numer zamówienia</p>
                                </div>
                            </div>
                            <div className='PaD__option unabled'>
                                <label enabled className='PaD__label'>
                                    <input type="checkbox" name="pickup" checked={paymentMethod === 'pickup'} onChange={() => {}}/>
                                    <div>
                                        <p>Przy odbiorze</p>
                                        <p>(niedostępna)</p>
                                    </div>
                                    <p><i class="fas fa-hands-helping"></i></p>
                                </label>
                            </div>
                    </div>
                </div>
                <div>
                    <h5 className='PaD__subtitle'>3. Dane odbiorcy</h5>
                    {!user && registerOption === 2 && <RegisterForm />}
                    {user && changeAdress ? 
                    <RegisterForm 
                    nameAndSurname = {user.nameAndSurname}
                    street = {user.street}
                    postCode = {user.postCode}
                    city = {user.city}
                    email = {user.email}
                    phone = {user.phone}
                    setChangeAdress = {setChangeAdress}
                    /> : null}

                    {user && !changeAdress 
                    ? <div>
                    <p>{user.nameAndSurname}</p>
                    <p>{user.street}</p>
                    <p>{user.postCode}</p>
                    <p>{user.city}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button onClick={() =>{setChangeAdress(!changeAdress); setRegisterOption(4);}}>Zmień dane do wysyłki</button>
                </div> : null }

                </div>
            </div>
        </div>
     );
}
 
export default PaymentAndDelivery;