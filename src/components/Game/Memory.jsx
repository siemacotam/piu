import React, { useRef } from 'react';
import Card from './Card';

import './Memory.css'

const Memory = () => {
    // const cardsColor = ['red','red','blue','blue','green','green','brown','brown','yellow','yellow','gray','gray','cadetblue','cadetblue','violet','violet','lightgreen','lightgreen']

    // const startTime = new Date().getTime();
    // let cards = []
   

    // let activeCard = ''
    // const activeCards = []
   

    // const gamePairs = cards.length / 2
    // let gameResult = 0;
    // console.log(cards)
    // const init = () => {
    //     for (let i = 0; i < 18; i++) {
    //         cards.push(<Card className='memoryElement'/> )
    //     }
    //     cards.forEach((card) => {
    //         const index = Math.floor(Math.random() * cardsColor.length)
    //         for(let i =0; i<18; i++){
    //             cards.push(<div className={'memory Element' + cardsColor[index]} />)
    //         }

            
    //         cardsColor.splice(index, 1)
    //     })
    // }
    // console.log(cards)
    // init()

    return ( 
        <div className='memory-wrap'>
            {/* {cards.map(i => i)} */}
        </div>
     );
}
 
export default Memory;