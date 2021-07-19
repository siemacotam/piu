import React from 'react';

import './Dress.css'
import logo from '.../../../src/images/logo.png'

const Dress = ({authors, img, price, title}) => {
    const allAuthors = authors.join(', ')

    return ( 
        <li>
            <article className='dress-card'>
                <h3 className='dress-card__title'>{title}</h3>
                <img className='dress-card__image' src={logo} alt={title} />
                <p className='dress-card__price'>`koszt: ${price} zł`</p>
                <p className='dress-card__authors'>{`Autorzy : ${allAuthors}`}</p>
            </article>
        </li>
     );
}
 
export default Dress;