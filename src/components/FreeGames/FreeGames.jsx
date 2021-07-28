import React, { useContext } from 'react';

import Item from '../Item/Item';
import { StoreContext } from '../../store/StoreProvider';

const FreeGames = () => {
    const { items } = useContext(StoreContext);

    const newElements = items.filter(i => i.type === 'free')
    const itemsElements = newElements.map(item => <Item key={item.id} {...item}/>)

    return ( 
        <section className='items'>
            <h2 className='items__title'>Oferta</h2>
            <ul className='items__list'>
                {itemsElements}
            </ul>
        </section>
     );
}
 
export default FreeGames;