import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

import { StoreContext } from '../../store/StoreProvider';
import OrdersInfo from './subcomponents/OrdersInfo';
import UserData from './subcomponents/UserData';

const UserDataPanel = () => {
    const [isDataOpen, setIsDataOpen] = useState(false)

    const { user, setUser } = useContext(StoreContext)

    const handleShowUserDataClick = () => {
        setIsDataOpen(!isDataOpen)
    }

    const dataButtonLabel = isDataOpen ? 'Zamknij' : 'Pokaż'

    return ( 
        <div>
            <p> Witaj </p>
            <p>Dane użytkownika</p>
            {isDataOpen && <UserData />}
            <button onClick={handleShowUserDataClick}>{dataButtonLabel}</button>
            <OrdersInfo />
            <button onClick={() => setUser(null)}><Link to='/' style={{textDecoration: 'none', color: 'white'}}> Wyloguj </Link></button>
        </div>
     );
}
 
export default UserDataPanel;