import React, { useContext } from 'react';

import Dress from './subcomponents/Dress';
import { StoreContext } from '../../store/StoreProvider';

import './Dresses.css'

const Dresses = () => {
    const { dresses } = useContext(StoreContext);

    const dressesElements = dresses.map(dress => <Dress key={dress.id} {...dress}/>)

    return ( 
        <section className='dresses'>
            <h2 className='dresses__title'></h2>
            <ul className='dresses__list'>
                {dressesElements}
            </ul>
        </section>
     );
}
 
export default Dresses;