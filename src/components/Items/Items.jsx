import React, { useContext } from 'react';

import Item from '../Item/Item';
import { StoreContext } from '../../store/StoreProvider';

import './Items.css'

const Items = ({itemFilter, title}) => {
    const { items } = useContext(StoreContext);
    
    const fpsElements = items.filter(i => i.category === 'fps')
    const rpgElements = items.filter(i => i.category === 'rpg')
    const strategyElements = items.filter(i => i.category === 'strategy')
    const sportElements = items.filter(i => i.category === 'sport')
    const otherElements = items.filter(i => i.category === 'other')

    const promoElements = items.filter(i => i.type === 'cut')
    const newElements = items.filter(i => i.type === 'new')
    const freeElements = items.filter(i => i.type === 'free')

    const itemsElements = () => {
        if(itemFilter === 'all'){return items.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'fps'){return fpsElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'rpg'){ return rpgElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'strategy'){return strategyElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'sport'){return sportElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'other'){return otherElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'promo'){return promoElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'new'){return newElements.map(item => <Item key={item.id} {...item}/>)
    } else if(itemFilter === 'free'){return freeElements.map(item => <Item key={item.id} {...item}/>)
    }
}

    return ( 
        <section className='items'>
            <h2 className='items__title'>{title}</h2>
            <ul className='items__list'>
                {itemsElements()}
            </ul>
        </section>
     );
}
 
export default Items;