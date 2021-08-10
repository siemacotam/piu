import React, { useContext } from 'react';

import { Link } from 'react-router-dom'
import { StoreContext } from '../../../store/StoreProvider';

const OrderReady = ({setStep}) => {
    const { user } = useContext(StoreContext)

    setStep(4)

    return ( 
        <div>
            <p>Gratulujemy zakupu</p>
            <i class="far fa-smile"></i>
            <p>siema</p>
            <Link to={'/'}>Powrót na stronę główną</Link>
            { user && <Link to={'/my-items'}>Przejdź do zakładki z grami</Link> }
        </div>
     );
}
 
export default OrderReady;