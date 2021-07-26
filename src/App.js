import React from 'react';
import { HashRouter as Router } from 'react-router-dom' 

import Header from './components/Header/Header';
import AsideMenu from './components/AsideMenu/AsideMenu'
import Content from './components/Content/Content.jsx'

import StoreProvider from './store/StoreProvider';

import './App.css';

const App = () => {
  return ( 
    <StoreProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="content-wrapper">
            <AsideMenu />
            <Content />
        </div>
      </Router>
    </StoreProvider>
   );
}
 
export default App;
