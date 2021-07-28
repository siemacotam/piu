import React, { createContext, 
    useEffect, 
    // useEffect,
    useState } from 'react';

import cs from '../images/csmini.png';
import warcraft3 from '../images/warcraft3mini.png';
import angryBirds from '../images/angrybirdsmini.jpg';
import diablo2 from '../images/diablo2mini.png';
import doom from '../images/doommini.jpg';
import starcraft from '../images/starcraftmini.png';
import tibia from '../images/tibiamini.jpg';
import wolfenstein from '../images/wolfensteinmini.jpg'


// import request from '../helpers/request';

export const StoreContext = createContext(null)

export const itemsData = [
    {
      id: 1,
      img: tibia,
      price: 69.99,
      discount:'',
      title: 'Tibia',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: 'new',
    },
    {
      id: 2,
      img: warcraft3,
      price: 69.99,
      discount:'',
      title: 'Warcraft 3',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type:'new',
    },
    {
      id: 3,
      img: starcraft,
      price: 69.99,
      discount:'',
      title: 'Starcraft',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: 'new',
    },
    {
      id: 4,
      img: diablo2,
      price: 69.99,
      discount:0.2,
      title: 'Diablo 2',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: 'cut',
    },
    {
      id: 5,
      img: cs,
      price: 69.99,
      discount:0.2,
      title: 'Counter-strike',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: 'cut',
    },
    {
      id: 6,
      img: doom,
      price: 69.99,
      discount:0.2,
      title: 'Doom',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: 'cut',
    },
    {
      id: 7,
      img: wolfenstein,
      price: 29.99,
      discount:1,
      title: 'Wolfenstein',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: '',
    },
    {
      id: 8,
      img: angryBirds,
      price: 69.99,
      discount:1,
      title: 'Angry birds',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 0,
      type: '',
    }
  ];

export const usersData = [
    {
      accessLevel: 0,
      budget: 150,
      items: [
        itemsData[0].id,
        itemsData[1].id,
        itemsData[2].id,
      ],
      login: 'user',
      password: 'user',
    },
    {
      accessLevel: 1,
      budget: 1000000,
      items: [
        itemsData.map(dress => dress.id)
      ],
      login: 'Admin',
      password: '******',
    }
  ];

export const usersMessages = [];
  


const StoreProvider = ({children}) => {
    const [items, setItems] = useState(itemsData);
    const [user, setUser] = useState(null)
    const [isMenuOpen , setIsMenuOpen] = useState(true)
    const [shoppingCart, setShoppingCart] = useState([])

    // const fetchData = async () => {
    //     const {data} = await  request.get('/dresses');

    //     setDresses(data.dresses);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    useEffect(() => {setItems(itemsData)},[])

    return (
        <StoreContext.Provider value ={ {
            items, 
            setItems ,
            user, 
            setUser,
            isMenuOpen,
            setIsMenuOpen,
            shoppingCart,
            setShoppingCart,
            }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;