import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import Items from '../Items/Items';
import UserAccount from '../UserAccount/UserAccount';
import AdminPanel from '../AdminPanel/AdminPanel';
 
import './Content.css';

const ADMIN_TYPE = 1;

const Content = () => {
    const { isMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user && user[0].accessLevel === ADMIN_TYPE;

    return ( 
        <main className={isMenuOpen ? 'content' : 'none'}>
            <Switch>
                <Route exact path='/' render={() => <Items />}></Route>
                {isUserLogged && <Route exact path='/my-items' render={() => <UserAccount />}></Route>}
                {isAdmin && <Route exact path='/menage-items' render={() => <AdminPanel />}></Route>}
                <Redirect to='/'></Redirect>
            </Switch>
        </main>
     );
}
 
export default Content;