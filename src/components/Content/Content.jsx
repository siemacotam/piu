import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import Items from '../Items/Items';
import UserAccount from '../UserAccount/UserAccount';
import AdminPanel from '../AdminPanel/AdminPanel';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Checkout from '../Checkout/Checkout';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';
import UserDataPanel from '../UserDataPanel/UserDataPanel';
import Promotions from '../Promotions/Promotions';
import NewItems from '../NewItems/NewItems'; 
import FreeGames from '../FreeGames/FreeGames';
import Home from '../Home/Home';

import './Content.css';
import Game from '../Game/Game';
import Memory from '../Game/Memory';

const ADMIN_TYPE = 1;

const Content = () => {
    const { isMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user && user[0].accessLevel === ADMIN_TYPE;

    return ( 
        <main className={isMenuOpen ? 'content' : 'none'}>
            <Switch>
                <Route exact path='/' render={() => <Home />}></Route>
                {isUserLogged && <Route exact path='/my-items' render={() => <UserAccount />}></Route>}
                {isAdmin && <Route exact path='/menage-items' render={() => <AdminPanel />}></Route>}
                <Route path='/offer' render={() => <Items />}></Route>
                <Route path='/shopping-cart' render ={()=> <ShoppingCart/>}></Route>
                <Route path='/checkout' render={() => <Checkout/>}></Route>
                <Route path='/game' render={() => <Game/>}></Route>
                <Route path='/memory' render={() => <Memory/>}></Route>
                <Route path='/search' render={()=> <Search />}></Route>
                <Route path='/contact' render ={() => <Contact />}></Route>
                <Route path='/new' render ={() => <NewItems/>}></Route>
                <Route path='/free-games' render ={() => <FreeGames/>}></Route>
                <Route path='/promotions' render ={() => <Promotions />}></Route>
                <Route path='/user-account' render ={() => <UserDataPanel />}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </main>
     );
}
 
export default Content;