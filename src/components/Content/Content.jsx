import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import Dresses from '../Dresses/Dresses';
 
import './Content.css';

const ADMIN_TYPE = 1;

const Content = () => {
    const { user } = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user && user[0].accessLevel === ADMIN_TYPE;

    return ( 
        <main className='content'>
            <Switch>
                <Route exact path='/' render={() => <Dresses />}></Route>
                {isUserLogged && <Route exact path='/my-dresses' render={() => <p>siema</p>}></Route>}
                {isAdmin && <Route exact path='/menage-items' render={() => <p>zarzadzanie kursami</p>}></Route>}
                <Redirect to='/'></Redirect>
            </Switch>
        </main>
     );
}
 
export default Content;