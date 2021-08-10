import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { preorders, StoreContext } from '../../../store/StoreProvider';
import RegisterForm from '../../RegisterForm/RegisterForm';
import { orderPrice } from '../../ShoppingCart/ShoppingCart';

import './PaymentAndDelivery.css'


const PaymentAndDelivery = ({setStep}) => {
    const [paymentMethod, setPaymentMethod] = useState('BLIK')
    const [changeAdress, setChangeAdress] = useState(false)
    const [rulesCheckbox, setRulesCheckbox] = useState(false);
    const [placeCheckbox, setPlaceCheckbox] = useState(false);
    const [opinionCheckbox, setOpinionCheckbox] = useState(false);
    const { user } = useContext(StoreContext)
    const { registerOption, setRegisterOption, shoppingCart, orderId, setOrderId, unregisteredUser } = useContext(StoreContext);

    const history = useHistory();

    setStep(2)

    useEffect(()=>{window.scrollTo(0,0)},[])

    const handleChange = (e) => {
        const paymentOption = e.target.name
        setPaymentMethod(paymentOption)
    }
    const handleRulesCheckboxChange = (e) => {
        const data = e.target.checked
        setRulesCheckbox(data)
    }
    const handlePlaceCheckboxChange = (e) => {
        const data = e.target.checked
        setPlaceCheckbox(data)
    }
    const handleOpinionCheckboxChange = (e) => {
        const data = e.target.checked
        setOpinionCheckbox(data)
    }

    const orderedItems = shoppingCart.map(i => i)
    const userData = user ? user : unregisteredUser

    const order = {
        id: orderId,
        items: orderedItems,
        user: userData,
        time: new Date().toLocaleString(),
        price: orderPrice,
        payment: paymentMethod,
        delivery: 'E-mail',
        acceptOpinionQuestion: opinionCheckbox,
    }

    const handleNextStepClick = (userData) => {
        if(rulesCheckbox && placeCheckbox){
            setOrderId(prev => prev + 1)
            if(registerOption ===2){order.user = userData}
            preorders.push(order)
            setStep(3)
            history.push({
                pathname: '/checkout/podsumowanie',
                state: {
                    id: orderId,
                    orderObject: order,
                }
        })} else {
            alert('uzupelnij checkboxy')
        }
}
    
    return ( 
        <div className='PaD__wrap'>
            <h3 className='PaD__title'>Dostwa i płatność</h3>
            <div>
                <div className='PaD__delivery'>
                    <h5 className='PaD__subtitle'>1. Sposób dostawy</h5>
                    <div className="PaD__shipment">
                        <label className='PaD__label'>
                            <input type="checkbox" name="mail" checked onChange={() => {}}/>
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
                <div className='PaD__payment'>
                    <h5 className='PaD__subtitle'>2. Metoda płatoności</h5>
                    <div className="PaD__options-wrapper">
                            <div className={paymentMethod === 'BLIK' ? 'PaD__option checked' : 'PaD__option'}>
                                <label  className='PaD__label'>
                                    <input type="checkbox" name="BLIK" checked={paymentMethod === 'BLIK'} onChange={handleChange}/>
                                    <div>
                                        <p>BLIK</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="fas fa-phone-square"></i></p>
                                </label>
                                <div className={paymentMethod === 'BLIK' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Sfinalizuj tranzakcje używając kodu BLIK.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'KARTA' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="KARTA" checked={paymentMethod === 'KARTA'} onChange={handleChange}/>
                                    <div>
                                        <p>Karta płatnicza online</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="far fa-credit-card"></i></p>
                                </label>
                                <div className={paymentMethod === 'KARTA' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zostaniesz przeniesiony na stronę swojego banku gdzie sfinalizujesz tranzakcję.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'PRZELEW' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="PRZELEW" checked={paymentMethod === 'PRZELEW'} onChange={handleChange}/>
                                    <div>
                                        <p>Przelew gotówkowy</p>
                                        <p>(bezpłatnie)</p>
                                    </div>
                                    <p><i class="fas fa-money-check"></i></p>
                                </label>
                                <div className={paymentMethod === 'PRZELEW' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zamówienie wyślemy, kiedy otrzymamy od Ciebie wpłatę.</p>
                                    <p>Pamiętaj, żeby w tytule przelewu wpisać numer zamówienia</p>
                                </div>
                            </div>
                            <div className='PaD__option unabled'>
                                <label enabled className='PaD__label'>
                                    <input type="checkbox" name="ODBIÓR" checked={paymentMethod === 'ODBIÓR'} onChange={() => {}}/>
                                    <div>
                                        <p>Przy odbiorze</p>
                                        <p>(niedostępna)</p>
                                    </div>
                                    <p><i class="fas fa-hands-helping"></i></p>
                                </label>
                            </div>
                    </div>
                </div>
                <div className='PaD__client-data'>
                    <h5 className='PaD__subtitle'>3. Dane odbiorcy</h5>
                    {!user && registerOption === 2 && <RegisterForm handleNextStepClick={handleNextStepClick}/>}
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
                    <p>Imię i nazwisko/ nazwa firmy :{user.nameAndSurname}</p>
                    <p>Adres: {user.street}</p>
                    <p>Kod pocztowy: {user.postCode}</p>
                    <p>Miasto: {user.city}</p>
                    <p>Email: {user.email}</p>
                    <p>Numer telefonu: {user.phone}</p>
                    <button onClick={() =>{setChangeAdress(!changeAdress); setRegisterOption(4);}}>Zmień dane do wysyłki</button>
                </div> : null }

                </div>
                <div className='PaD__terms'>
                    <h5 className='PaD__subtitle'>Zgody formalne</h5>
                    <div className='PaD__checkbox-wrap'>
                        <input type="checkbox" className='PaD__checkbox' value={rulesCheckbox} onChange={handleRulesCheckboxChange}/>
                        <p  className='PaD__checkbox-info'>Akceptuje regulamin sklepu.*</p>
                    </div>
                    <div className='PaD__checkbox-wrap'>
                        <input type="checkbox" className='PaD__checkbox' value={placeCheckbox} onChange={handlePlaceCheckboxChange}/>
                        <p className='PaD__checkbox-info'>Oświadczam, że posiadam stałe miejsce zamieszkania/ siedziby/ pobytu na terytorium RP.*</p>
                    </div>
                    <div className='PaD__checkbox-wrap'>
                        <input type="checkbox" className='PaD__checkbox' value={opinionCheckbox} onChange={handleOpinionCheckboxChange}/>
                        <p className='PaD__checkbox-info'>Chcę podzielic się opinią o satysfakcji z zakupów.</p>
                    </div>
                    <p>*- zgody wymagane</p>
                </div>
                <div className='PaD__summary'>
                    <div className='PaD__summary-info'>
                        <p >Wartość koszyka</p>
                        <p >{orderPrice} zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >Dostawa</p>
                        <p >zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >Płatność</p>
                        <p >0,00 zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p>Do zapłaty</p>
                        <p >zł</p>
                    </div>
                    <div className='PaD__button-wrap'>
                        { registerOption === 2 
                        ?<button className='PaD__accept-button' type='submit' form='myForm'>Przejdź do podsumowania
                        <i class="fas fa-chevron-right"></i></button>
                        :<button onClick ={handleNextStepClick}className='PaD__accept-button'> 
                            Przejdź do podsumowania    
                        <i class="fas fa-chevron-right"></i>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentAndDelivery;