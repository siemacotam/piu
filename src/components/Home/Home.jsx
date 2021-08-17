import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Ocasion from './subcomponents/Ocasion';

import './Home.css'
import Bestseller from './subcomponents/Bestseller';

const Home = () => {

    const history = useHistory()
    useEffect(()=>{window.scrollTo(0,0)},[])


    return ( 
        <div className="home-wrap">
            <section className="home__categories">
                <div className='home__categories-element' 
                onClick={() => history.push('/offer/new')}
                >
                    <i class="fas fa-glass-cheers"></i>
                    <p>Premiery</p>
                </div>
                <div className='home__categories-element' 
                onClick={() => history.push('/offer/promotions')}
                >
                    <i class="fas fa-cut"></i>
                    <p>Promocje</p>
                </div>
                <div className='home__categories-element' 
                onClick={() => history.push('/offer/sport')}
                >
                    <i class="far fa-futbol"></i>
                    <p>Sport</p>
                </div>
            </section>
            <Bestseller />
            <Ocasion />
        </div>
     );
}
 
export default Home;