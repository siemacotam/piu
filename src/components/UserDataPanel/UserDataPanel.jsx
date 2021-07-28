import React, { useContext, useState } from 'react';

import { StoreContext } from '../../store/StoreProvider';
import OrdersInfo from './subcomponents/OrdersInfo';
import UserData from './subcomponents/UserData';

const UserDataPanel = () => {
    const [isDataOpen, setIsDataOpen] = useState(false)

    const { user } = useContext(StoreContext)

    const handleShowUserDataClick = () => {
        setIsDataOpen(!isDataOpen)
    }

    const dataButtonLabel = isDataOpen ? 'Zamknij' : 'Pokaż'

    return ( 
        <div>
            <p> Witaj {user[0].login}</p>
            <p>Dane użytkownika</p>
            {isDataOpen && <UserData />}
            <button onClick={handleShowUserDataClick}>{dataButtonLabel}</button>
            <OrdersInfo />
        </div>
     );
}
 
export default UserDataPanel;