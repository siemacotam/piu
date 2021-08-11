import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

const OrdersInfo = () => {
    const [showOrders, setShowOrders] = useState(false)

    const {user} = useContext(StoreContext)

    const properLabel = showOrders ? 'schowaj' : 'pokaż'

    return ( 
        <div>
            <p>zamówienia</p>
            {user.orders.length > 0 && <button onClick ={()=>{setShowOrders(!showOrders)}}>{properLabel}</button> }
            {user.orders.length > 0 && showOrders === true
            ? <div>
                {user.orders.map(i => 
                <div>
                    <p>Zamówienie nr {i.id} złożone {i.time} </p>
                    <p>Zamówione produkty : {i.items.map(it => <p> {it.title} </p>)}</p>
                    <p>Cena {i.price}</p>
                    <p>Status realizacji: zrealizowano </p>
                </div> )
                }
            </div>
            : <p>Brak zamówień</p>  }
        </div>
     );
}
 
export default OrdersInfo;