import React, { useContext } from 'react';

import Item from '../Item/Item';
import { StoreContext } from '../../store/StoreProvider';

import './Items.css'

const Items = () => {
    const { items } = useContext(StoreContext);

    const itemsElements = items.map(item => <Item key={item.id} {...item}/>)

    return ( 
        <section className='items'>
            <h2 className='items__title'>Oferta</h2>
            <ul className='items__list'>
                {itemsElements}
            </ul>
        </section>
     );
}
 
export default Items;