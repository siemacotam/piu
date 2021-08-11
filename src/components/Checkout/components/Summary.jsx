import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { preorders, StoreContext } from '../../../store/StoreProvider';
import CartItem from '../../ShoppingCart/subcomponent/CartItem';

import { useLocation } from 'react-router-dom';

import './Summary.css'

const Summary = ({setStep}) => {
    const { orderId } = useContext(StoreContext)

    const history = useHistory()
    const location = useLocation();

    setStep(3)

    useEffect(()=>{window.scrollTo(0,0)},[])

    const preorderId = location.state.id
    const correctPreorder = preorders.filter(i => i.id === preorderId)
    const userOrder = correctPreorder[0]

    const itemsToBuy = userOrder.items.map(item => <CartItem key={item.id} {...item} summary={true}/>)

    const paymentIcon = () => {
        if(userOrder.payment === 'BLIK'){
            return <i class="fas fa-phone-square"></i>
        } else if(userOrder.payment === 'KARTA' ){
            return <i class="far fa-credit-card"></i>
        } else if(userOrder.payment === 'PRZELEW' ){
            return <i class="fas fa-money-check"></i>
        }
    }

    const handleClick = () => {
        history.push({
            pathname: '/checkout/bank',
            state: {
                payment: userOrder.payment,
                id: userOrder.id,
                orderObject: location.state.orderObject,
            }
    })
        // preorders push to orders
    }

    return ( 
        <div className='summary'>
            <h4 className='summary__title'>Podsumowanie</h4>
            <div>
                <h5 className='summary__subtitle'>Dostawa</h5>
                <div className='summary__panel'>
                    <p className='summary__panel-element'><i class="fas fa-mail-bulk"></i></p>
                    <p className='summary__panel-element'>{userOrder.delivery}</p>
                </div>
                <div className='summary__adress'>
                    <h5 className='summary__subtitle'>Dane odbiorcy:</h5>
                    <p className='summary__subtitle-element'>
                        <span className='summary_subtitle-text'>Imie i nazwisko/nazwa firmy:</span><br />  {userOrder.user.nameAndSurname}</p>
                    <p className='summary__subtitle-element'>
                    <span className='summary_subtitle-text'>Adres:</span><br />  {userOrder.user.street}</p>
                    <p className='summary__subtitle-element'>
                    <span className='summary_subtitle-text'>Kod pocztowy i miasto:</span><br />  {userOrder.user.postCode} {userOrder.user.city}</p>
                    <p className='summary__subtitle-element'>
                    <span className='summary_subtitle-text'>Numer telefonu:</span><br /> {userOrder.user.phone}</p>
                    <p className='summary__subtitle-element'>
                    <span className='summary_subtitle-text'>Email:</span><br /> {userOrder.user.email}</p>
                    <p className='summary__subtitle-element'>Na ten adress email wyślemy klucz produnktu</p>
                </div>
                <h5 className='summary__subtitle'>Płatność</h5>
                <div className='summary__panel'>
                    <p className='summary__panel-element'>{paymentIcon()}</p>
                    <p className='summary__panel-element'>{userOrder.payment}</p>
                </div>
                <h5 className='summary__subtitle'>Koszyk</h5>
                <div className='summary__cart'>
                    {itemsToBuy}
                </div>
                <div className='summary__sum-up'>
                    <div className='PaD__summary-info'>
                        <p >Wartość koszyka</p>
                        <p >{userOrder.price} zł</p>
                    </div>
                    <div className='summary__sum-up-info'>
                        <p >Dostawa</p>
                        <p >0,00 zł</p>
                    </div>
                    <div className='summary__sum-up-info'>
                        <p >Płatność</p>
                        <p >0,00 zł</p>
                    </div>
                    <div className='summary__sum-up-info'>
                        <p>Do zapłaty</p>
                        <p >{userOrder.price} zł</p>
                    </div>
                    <div className='summary__button-wrap'>
                        <button onClick={handleClick} className='summary__accept-button'>Kupuję i płacę   
                            <i class="fas fa-chevron-right"></i> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Summary;