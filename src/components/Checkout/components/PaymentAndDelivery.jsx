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
            <h3 className='PaD__title'>Dostwa i p??atno????</h3>
            <div>
                <div className='PaD__delivery'>
                    <h5 className='PaD__subtitle'>1. Spos??b dostawy</h5>
                    <div className="PaD__shipment">
                        <label className='PaD__label'>
                            <input type="checkbox" name="mail" checked onChange={() => {}}/>
                            <div>
                                <div>
                                    <p>E-mail</p>
                                    <p>(bezp??atnie)</p>
                                </div>
                                <div>
                                    <p>Klucz produktu otrzymasz w wiadomo??ci e-mail po zaksiegowaniu wp??aty</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='PaD__payment'>
                    <h5 className='PaD__subtitle'>2. Metoda p??atono??ci</h5>
                    <div className="PaD__options-wrapper">
                            <div className={paymentMethod === 'BLIK' ? 'PaD__option checked' : 'PaD__option'}>
                                <label  className='PaD__label'>
                                    <input type="checkbox" name="BLIK" checked={paymentMethod === 'BLIK'} onChange={handleChange}/>
                                    <div>
                                        <p>BLIK</p>
                                        <p>(bezp??atnie)</p>
                                    </div>
                                    <p><i class="fas fa-phone-square"></i></p>
                                </label>
                                <div className={paymentMethod === 'BLIK' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Sfinalizuj tranzakcje u??ywaj??c kodu BLIK.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'KARTA' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="KARTA" checked={paymentMethod === 'KARTA'} onChange={handleChange}/>
                                    <div>
                                        <p>Karta p??atnicza online</p>
                                        <p>(bezp??atnie)</p>
                                    </div>
                                    <p><i class="far fa-credit-card"></i></p>
                                </label>
                                <div className={paymentMethod === 'KARTA' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zostaniesz przeniesiony na stron?? swojego banku gdzie sfinalizujesz tranzakcj??.</p>
                                </div>
                            </div>
                            <div className={paymentMethod === 'PRZELEW' ? 'PaD__option checked' : 'PaD__option'}>
                                <label className='PaD__label'>
                                    <input type="checkbox" name="PRZELEW" checked={paymentMethod === 'PRZELEW'} onChange={handleChange}/>
                                    <div>
                                        <p>Przelew got??wkowy</p>
                                        <p>(bezp??atnie)</p>
                                    </div>
                                    <p><i class="fas fa-money-check"></i></p>
                                </label>
                                <div className={paymentMethod === 'PRZELEW' ? 'PaD__info showInfo' : 'PaD__info'}>
                                    <p>Zam??wienie wy??lemy, kiedy otrzymamy od Ciebie wp??at??.</p>
                                    <p>Pami??taj, ??eby w tytule przelewu wpisa?? numer zam??wienia</p>
                                </div>
                            </div>
                            <div className='PaD__option unabled'>
                                <label enabled className='PaD__label'>
                                    <input type="checkbox" name="ODBI??R" checked={paymentMethod === 'ODBI??R'} onChange={() => {}}/>
                                    <div>
                                        <p>Przy odbiorze</p>
                                        <p>(niedost??pna)</p>
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
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Imi?? i nazwisko/ nazwa firmy :</span> <br />{user.nameAndSurname}</p>
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Adres:</span> <br /> {user.street}</p>
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Kod pocztowy:</span> <br /> {user.postCode}</p>
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Miasto:</span> <br /> {user.city}</p>
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Email:</span> <br /> {user.email}</p>
                    <p className='PaD__subtitle-element' ><span className='summary_subtitle-text'>Numer telefonu:</span> <br /> {user.phone}</p>
                    <button onClick={() =>{setChangeAdress(!changeAdress); setRegisterOption(4);}}>Zmie?? dane do wysy??ki</button>
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
                        <p className='PaD__checkbox-info'>O??wiadczam, ??e posiadam sta??e miejsce zamieszkania/ siedziby/ pobytu na terytorium RP.*</p>
                    </div>
                    <div className='PaD__checkbox-wrap'>
                        <input type="checkbox" className='PaD__checkbox' value={opinionCheckbox} onChange={handleOpinionCheckboxChange}/>
                        <p className='PaD__checkbox-info'>Chc?? podzielic si?? opini?? o satysfakcji z zakup??w.</p>
                    </div>
                    <p>*- zgody wymagane</p>
                </div>
                <div className='PaD__summary'>
                    <div className='PaD__summary-info'>
                        <p >Warto???? koszyka</p>
                        <p >{orderPrice} z??</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >Dostawa</p>
                        <p >z??</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >P??atno????</p>
                        <p >0,00 z??</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p>Do zap??aty</p>
                        <p >z??</p>
                    </div>
                    <div className='PaD__button-wrap'>
                        { registerOption === 2 
                        ?<button className='PaD__accept-button' type='submit' form='myForm'>Przejd?? do podsumowania
                        <i class="fas fa-chevron-right"></i></button>
                        :<button onClick ={handleNextStepClick}className='PaD__accept-button'> 
                            Przejd?? do podsumowania    
                        <i class="fas fa-chevron-right"></i>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentAndDelivery;