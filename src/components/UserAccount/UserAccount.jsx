import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import Item from '../Item/Item';

import './UserAccount.css'

const UserAccount = () => {
    const { user, items } = useContext(StoreContext)

    const buyedItems = items
    .filter( item => user.items.includes(item.id))
    .map(item => <Item short={true} isUserContext={true} key={item.id} {...item}/>)

    return ( 
        <section className="user-account">
            <h2 className='user-account__title'>Zagraj !</h2>
            <ul className='user-account__list'>
                {buyedItems}
            </ul>
        </section>
     );
}
 
export default UserAccount;