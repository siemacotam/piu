import React from 'react';
import {Link} from 'react-router-dom'

const BannerItem = ({title, img, price,discount,slideRight, slideLeft}) => {
    return ( 
        <li className='banner'>
            <article className='banner__element'>
                 <p className='banner__title'>bestseller !</p>
                <img className='banner__img' src={img} alt ={title}/>
                <div className='banner__info'>
                    <h3 className='banner__game'>{title}</h3>
                    <p>od <span className='banner__price'>{Math.round((price - price * discount )*100)/100}</span> zł</p>
                </div>
                <button className='banner__button'><Link to='/offer'>przedź do sklepu</Link></button>
                <div className='banner__element-arrow-left' onClick={slideLeft}><i class="fas fa-chevron-left"></i></div>
                <div className='banner__element-arrow-right' onClick={slideRight}><i class="fas fa-chevron-right"></i></div>
            </article>
        </li>
     );
}
 
export default BannerItem;