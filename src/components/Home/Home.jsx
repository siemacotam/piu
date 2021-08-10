import React, { useContext, useEffect, useState } from 'react';
import { itemsData, StoreContext } from '../../store/StoreProvider';
import BannerItem from './subcomponents/BannerItem';
import Item from '../Item/Item';

import './Home.css'

const Home = () => {
    const[index, setIndex] = useState(0)
    const initionalMinute=30
    const initionalSeconds=0
    const[minutes, setMinutes] = useState(initionalMinute);
    const[seconds, setSeconds] =useState(initionalSeconds);
    const [itemIndex, setItemIndex] = useState('')
    
    useEffect(()=>{
        let myInterval = setInterval(()=>{
            if(seconds > 0){
                setSeconds(seconds - 1);
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes -1);
                    setSeconds(59)
                }
            }
        }, 1000)
        return ()=> {clearInterval(myInterval);
        };
    });

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

    const findPromo = () => {
        const chooseIndex = Math.floor(Math.random() * itemsData.length)
        setItemIndex(chooseIndex)
    }

    useEffect(()=>{findPromo()}, [])

    const searchedItem = itemsData[itemIndex]

    return ( 
        <div className="home-wrap">
            <ul className=''>
                {itemToShow}
            </ul>
            <article className='home-hit'>
                <p className="home-hit__title">okazja tygodnia</p>
                <div className="home-hit__header">
                    <p>oferta ważna jeszcze tylko</p>
                    {minutes ===0 && seconds === 0 
                    ? 'Czekaj na nową promocję !'
                    : <h3 className='home-hit__timer'>{minutes} : {seconds < 10 ? `0${seconds}` : seconds} </h3>}
                </div>
                <Item short = {true} {...searchedItem}/>
            </article>
        </div>
     );
}
 
export default Home;