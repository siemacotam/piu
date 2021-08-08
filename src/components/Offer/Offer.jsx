import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Items from '../Items/Items';

const Offer = () => {

    return ( 
        <Switch>
            <Route exact path='/offer' render={() => <Items itemFilter={'all'} title={'Oferta'} />}></Route>
            <Route path='/offer/fps' render={() => <Items itemFilter={'fps'} title={'Gry FPS'} />}></Route>
            <Route path='/offer/rpg' render={() => <Items itemFilter={'rpg'} title={'Gry RPG'} />}></Route>
            <Route path='/offer/strategie' render={() => <Items itemFilter={'strategy'} title={'Gry strategiczne'} />}></Route>
            <Route path='/offer/sport' render={() => <Items itemFilter={'sport'} title={'Gry sportowe'} />}></Route>
            <Route path='/offer/inne' render={() => <Items itemFilter={'other'} title={'Inne gry'} />}></Route>

            <Route path='/offer/promotions' render={() => <Items itemFilter={'promo'} title={'Promocje'} />}></Route>
            <Route path='/offer/new' render={() => <Items itemFilter={'new'} title={'Nowości'} />}></Route>
            <Route path='/offer/free' render={() => <Items itemFilter={'free'} title={'Darmowe gry'} />}></Route>
        </Switch>
     );
}
 
export default Offer;