import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import BannerItem from './BannerItem';

const Bestseller = () => {
    const[index, setIndex] = useState(0)
    const[timeoutId, setTimeoutId] = useState()
    const { items } = useContext(StoreContext);

    const newElements = items.filter(i => i.type === 'bestseller')

    useEffect(()=>{
        if(timeoutId){clearInterval(timeoutId)}
        const id = setInterval(timeout, 4000);
        setTimeoutId(id)
        return () => {clearInterval(id)}
    }, [index])

    const slideRight = () => {
        clearInterval(timeoutId)
        setIndex(prev => prev + 1)
        if(index >= newElements.length - 1){setIndex(0)}
        const id = setInterval(timeout, 4000);
        setTimeoutId(id)
    }

    const slideLeft = () => {
        clearInterval(timeoutId)
        setIndex(prev => prev - 1)
        if(index <= 0){setIndex(newElements.length - 1)}
        const id = setInterval(timeout, 4000);
        setTimeoutId(id)
    }

    const itemsElements = newElements.map(item => <BannerItem key={item.id} 
        slideRight={slideRight}  slideLeft={slideLeft}
        {...item}/>)
    const itemToShow = itemsElements[index]

    const timeout = ()=>{ 
        if(index >= newElements.length - 1){setIndex(0)
        } else {setIndex(prev => prev + 1)}
}

    return ( 
        <ul className=''>
                {itemToShow}
            </ul>
     );
}
 
export default Bestseller;