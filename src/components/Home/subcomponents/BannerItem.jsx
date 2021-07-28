import React from 'react';
import {Link} from 'react-router-dom'

const BannerItem = ({title, img, type, price,discount}) => {
    return ( 
        <li className='item item-banner'>
            <article className='item-card item-card-border'>
                 <p className='item-card__head-cut'>BESTSELLER !</p>
                <img className='item-card__image banner__img' src={img} alt ={title}/>
                <h3 className='item-card__title'>{title}</h3>
                <p>{Math.round((price - price * discount )*100)/100} zł</p>
                
                <button className='banner__button'><Link style={{textDecoration: 'none', color: 'white', display: 'block'}} to='/offer'>przedź do sklepu</Link></button>


            </article>
        </li>
     );
}
 
export default BannerItem;