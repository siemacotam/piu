import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

const OrdersInfo = () => {

    const {user} = useContext(StoreContext)

    return ( 
        <div>
            {user.orders.map(i => <p>{(i.items.map(it => it.title)) } </p> )}
        </div>
     );
}
 
export default OrdersInfo;