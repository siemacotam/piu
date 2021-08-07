import React, { useContext } from 'react';
import { orders } from '../../../store/StoreProvider';

const Summary = () => {
    console.log(orders)
    return ( 
        <div>Podsumowanie</div>
     );
}
 
export default Summary;