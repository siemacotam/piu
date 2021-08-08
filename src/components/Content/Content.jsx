import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import UserAccount from '../UserAccount/UserAccount';
import AdminPanel from '../AdminPanel/AdminPanel';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Checkout from '../Checkout/Checkout';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';
import UserDataPanel from '../UserDataPanel/UserDataPanel';
import Home from '../Home/Home';

import './Content.css';
import Game from '../Game/Game';
import Memory from '../Game/Memory';
import RegisterForm from '../RegisterForm/RegisterForm';
import Offer from '../Offer/Offer';

const ADMIN_TYPE = 1;

const Content = () => {
    const { isMenuOpen } = useContext(StoreContext);
    const { user } = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user && user.accessLevel === ADMIN_TYPE;

    return ( 
        <main className={isMenuOpen ? 'content' : 'none'}>
            <Switch>
                <Route exact path='/' render={() => <Home />}></Route>
                {isUserLogged && <Route exact path='/my-items' render={() => <UserAccount />}></Route>}
                {isAdmin && <Route exact path='/menage-items' render={() => <AdminPanel />}></Route>}
                <Route path='/offer' render={() => <Offer />}></Route>
                <Route path='/shopping-cart' render ={()=> <ShoppingCart/>}></Route>
                <Route path='/checkout' render={() => <Checkout/>}></Route>
                <Route path='/game' render={() => <Game/>}></Route>
                <Route path='/memory' render={() => <Memory/>}></Route>
                <Route path='/search' render={()=> <Search />}></Route>
                <Route path='/contact' render ={() => <Contact />}></Route>
                <Route path='/user-account' render ={() => <UserDataPanel />}></Route>
                <Route path='/rejestracja' render ={() => <RegisterForm />}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </main>
     );
}
 
export default Content;