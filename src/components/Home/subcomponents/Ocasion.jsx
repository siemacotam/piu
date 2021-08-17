import React, { useEffect, useState } from 'react';
import { itemsData } from '../../../store/StoreProvider';
import Item from '../../Item/Item';

const Ocasion = () => {
    const initionalMinute=30
    const initionalSeconds=0
    const[minutes, setMinutes] = useState(initionalMinute);
    const[seconds, setSeconds] =useState(initionalSeconds);
    const [itemIndex, setItemIndex] = useState('');


    const findPromo = () => {
        const chooseIndex = Math.floor(Math.random() * itemsData.length)
        setItemIndex(chooseIndex)
    }

    useEffect(()=>{findPromo()}, [])

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

    const searchedItem = itemsData[itemIndex]


    return ( 
        <article className='home-hit'>
                <p className="home-hit__title">okazja tygodnia</p>
                <div className="home-hit__header">
                    <p className='home-hit__text'>oferta ważna jeszcze tylko</p>
                    {minutes ===0 && seconds === 0 
                    ? 'Czekaj na nową promocję !'
                    : <h3 className='home-hit__timer'>{minutes} : {seconds < 10 ? `0${seconds}` : seconds} </h3>}
                </div>
                <Item short = {true} {...searchedItem}/>
            </article>
     );
}
 
export default Ocasion;