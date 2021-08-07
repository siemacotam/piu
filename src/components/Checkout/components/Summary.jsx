import React, { useContext } from 'react';
import { preorders, StoreContext } from '../../../store/StoreProvider';
import CartItem from '../../ShoppingCart/subcomponent/CartItem';

const Summary = () => {
    const { orderId } = useContext(StoreContext)
    console.log(preorders , orderId)

    const itemsToBuy = preorders[orderId -2].items.map(item => <CartItem key={item.id} {...item} summary={true}/>)

    return ( 
        <div>
            <h4>Podsumowanie</h4>
            <div>
                <h5>Dostawa</h5>
                <div>
                    <p>icona</p>
                    <p>{preorders[orderId -2].delivery}</p>
                </div>
                <div>
                    <h5>Dane odbiorcy</h5>
                    <p>{preorders[orderId -2].user.nameAndSurname}</p>
                    <p>{preorders[orderId -2].user.street}</p>
                    <p>{preorders[orderId -2].user.postCode} {preorders[orderId -2].user.city}</p>
                    <p>{preorders[orderId -2].user.phone}</p>
                    <p>{preorders[orderId -2].user.email}</p>
                    <p>Na ten adress email wyślemy klucz produnktu</p>
                </div>
                <h5>Płatność</h5>
                <div>
                    <p>icona</p>
                    <p>{preorders[orderId -2].payment}</p>
                </div>
                <h5>Koszyk</h5>
                <div>
                    {itemsToBuy}
                </div>
                <h5>Komentarz do zamówienia</h5>
                <input type="text" />
                <div className='PaD__summary'>
                    <div className='PaD__summary-info'>
                        <p >Wartość koszyka</p>
                        <p >{preorders[orderId -2].price} zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >Dostawa</p>
                        <p >0,00 zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p >Płatność</p>
                        <p >0,00 zł</p>
                    </div>
                    <div className='PaD__summary-info'>
                        <p>Do zapłaty</p>
                        <p >{preorders[orderId -2].price} zł</p>
                    </div>
                    <div className='PaD__button-wrap'>
                        <button>Kupuję i płacę </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Summary;