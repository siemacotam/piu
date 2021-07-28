import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import BannerItem from './subcomponents/BannerItem';
import {logo} from '../../images/mariosmall.png'

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
        <div className='home-bgContanier'></div>
            <h2 className='banner__title'>Witamy w Piu Games</h2>
            <section className='home'>
                <p className='homeElement'>Szukasz najnowszych gier ?</p>
                <p className='homeElement'>Nie wiesz jak spędzić wolny czas ?</p>
                <p className='homeElement'>Dobrze trafiłeś!</p>
                <p className='homeElement'>Od 10 lat łączymy środowisko gamerskie</p>
                <p className='homeElement'>Z nami nuda nie straszna</p>
            </section>
            <section className='items banner__items'>
                <ul className='items__list'>
                    {itemToShow}
                </ul>
            </section>
        </div>
     );
}
 
export default Home;