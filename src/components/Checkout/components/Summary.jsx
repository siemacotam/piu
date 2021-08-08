import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { preorders, StoreContext } from '../../../store/StoreProvider';
import CartItem from '../../ShoppingCart/subcomponent/CartItem';

import './Summary.css'

const Summary = () => {
    const { orderId } = useContext(StoreContext)

    const history = useHistory()
    
    useEffect(()=>{window.scrollTo(0,0)},[])

    const itemsToBuy = preorders[orderId -2].items.map(item => <CartItem key={item.id} {...item} summary={true}/>)

    const paymentIcon = () => {
        if(preorders[orderId -2].payment === 'BLIK'){
            return <i class="fas fa-phone-square"></i>
        } else if(preorders[orderId -2].payment === 'KARTA' ){
            return <i class="far fa-credit-card"></i>
        } else if(preorders[orderId -2].payment === 'PRZELEW' ){
            return <i class="fas fa-money-check"></i>
        }
    }

    const handleClick = () => {
        history.push('/bank')
        // preorders push to orders
    }

    return ( 
        <div className='summary'>
            <h4 className='summary__title'>Podsumowanie</h4>
            <div>
                <h5 className='summary__subtitle'>Dostawa</h5>
                <div className='summary__panel'>
                    <p className='summary__panel-element'><i class="fas fa-mail-bulk"></i></p>
                    <p className='summary__panel-element'>{preorders[orderId -2].delivery}</p>
                </div>
                <div className='summary__adress'>
                    <h5 className='summary__subtitle'>Dane odbiorcy:</h5>
                    <p className='summary__subtitle-element'>{preorders[orderId -2].user.nameAndSurname}</p>
                    <p className='summary__subtitle-element'>{preorders[orderId -2].user.street}</p>
                    <p className='summary__subtitle-element'>{preorders[orderId -2].user.postCode} {preorders[orderId -2].user.city}</p>
                    <p className='summary__subtitle-element'>{preorders[orderId -2].user.phone}</p>
                    <p className='summary__subtitle-element'>{preorders[orderId -2].user.email}</p>
                    <p className='summary__subtitle-element'>Na ten adress email wyślemy klucz produnktu</p>
                </div>
                <h5 className='summary__subtitle'>Płatność</h5>
                <div className='summary__panel'>
                    <p className='summary__panel-element'>{paymentIcon()}</p>
                    <p className='summary__panel-element'>{preorders[orderId -2].payment}</p>
                </div>
                <h5 className='summary__subtitle'>Koszyk</h5>
                <div className='summary__cart'>
                    {itemsToBuy}
                </div>
                <div className='summary__sum-up'>
                    <div className='PaD__summary-info'>
                        <p >Wartość koszyka</p>
                        <p >{preorders[orderId -2].price} zł</p>
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
                        <p >{preorders[orderId -2].price} zł</p>
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