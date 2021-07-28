import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import BannerItem from './subcomponents/BannerItem';

import './Home.css'

const Home = () => {
    const[index, setIndex] = useState(0)
    const { items } = useContext(StoreContext);

    let indexStart = 0
    const newElements = items.filter(i => i.type === 'bestseller')
    const numberOfBestsellers = newElements.length
    const timeout = ()=>{
        indexStart++
        setIndex(indexStart)
        if(indexStart>=numberOfBestsellers - 1){indexStart = -1}
        setTimeout(timeout, 4000)
    }
    useEffect(()=>{
        const id = setTimeout(timeout, 4000);
        return () => {clearTimeout(id)}
    }, [])

    const itemsElements = newElements.map(item => <BannerItem key={item.id} {...item}/>)
    const itemToShow = itemsElements[index]

    return ( 
        <div className="home-wrap">
            <h2>Witamy w Piu Games</h2>
            <p>bestsellery</p>
            <section className='items'>
                <ul className='items__list'>
                    {itemToShow}
                </ul>
            </section>
        </div>
     );
}
 
export default Home;