import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import Dress from '../Dress/Dress';

import './UserAccount.css'

const UserAccount = () => {
    const { user, dresses } = useContext(StoreContext)

    const buyedItems = dresses
    .filter( item => user[0].dresses.includes(item.id))
    .map(item => <Dress key={item.id} {...item}/>)

    return ( 
        <section className="user-account">
            <h2 className='user-account__title'>kupione rzeczy</h2>
            <ul className='user-account__list'>
                {buyedItems}
            </ul>
        </section>
     );
}
 
export default UserAccount;