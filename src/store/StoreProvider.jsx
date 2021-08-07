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
import batman from '../images/batmanmini.png'
import fifa from '../images/fifamini.png';
import lol from '../images/lolmini.jpg';
import pes from '../images/pesmini.png';
import starcraft2 from '../images/starcraft2mini.png';
import warzone from '../images/warzonemini.png';
import wow from '../images/wowmini.png'



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
      version: 1,
      type: 'new',
      link:'/game',
    },
    {
      id: 2,
      img: warcraft3,
      price: 69.99,
      discount:0.2,
      title: 'Warcraft 3',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 1,
      type:'cut',
      link:'/game',
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
      version: 1,
      type: 'bestseller',
      link:'/game',
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
      version: 1,
      type: 'cut',
      link:'/game',
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
      version: 1,
      type: 'new',
      link:'/game',
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
      version: 1,
      type: 'bestseller',
      link:'/game',
    },
    {
      id: 7,
      img: wolfenstein,
      price: 29.99,
      discount:0.2,
      title: 'Wolfenstein',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      language:'Polska',
      pegi:'13',
      version: 1,
      type: 'cut',
      link:'/game',
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
      version: 1,
      type: 'bestseller',
      link:'/game',
    },
    {
      id: 9,
      img: '',
      price: 0,
      discount:1,
      title: 'Memory- Celek Edition',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'free',
      link:'/memory',
    },
    {
      id: 10,
      img: batman,
      price: 99.99,
      discount:1,
      title: 'Batman forever',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'new',
      link:'/game',
    },
    {
      id: 11,
      img: fifa,
      price: 199.99,
      discount:1,
      title: 'Fifa 2022',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'new',
      link:'/game',
    },
    {
      id: 12,
      img: lol,
      price: 49.99,
      discount:0.2,
      title: 'League of legends',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'cut',
      link:'/game',
    },
    {
      id: 13,
      img: pes,
      price: 299.99,
      discount:0.3,
      title: 'Pro Evolution Soccer 2022',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'cut',
      link:'/game',
    },
    {
      id: 14,
      img: starcraft2,
      price: 79.99,
      discount:1,
      title: 'Starcraft 2',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: 'bestseller',
      link:'/game',
    },
    {
      id: 15,
      img: warzone,
      price: 49.99,
      discount:1,
      title: 'Call of duty: Warzone',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: '',
      link:'/game',
    },
    {
      id: 16,
      img: wow,
      price: 129.99,
      discount:1,
      title: 'World of Warcraft',
      rate:[],
      platform:'PC',
      distribution:'',
      language:'Polski',
      pegi:'3+',
      version: 1,
      type: '',
      link:'/game',
    }
  ];

export const usersData = [
    {
      accessLevel: 0,
      nameAndSurname: 'jacek',
      email: 'gg@gg.pl',
      phone: 231254151,
      street: 'Migdałowa 21',
      postCode: '62800',
      city: 'kalisz',
      items: [
        itemsData[0].id,
        itemsData[1].id,
        itemsData[2].id,
        itemsData[8].id,
      ],
      login: 'user',
      password: 'user',
      orders: [],
    },
    {
      accessLevel: 1,
      nameAndSurname:'God',
      email:'wp@wp.pl',
      street: 'Migdałowa 21',
      postCode: '62800',
      city: 'kalisz',
      phone: 214214214214,
      items: [
        itemsData.map(dress => dress.id)
      ],
      login: 'Admin',
      password: '******',
      orders: [],
    }
  ];

export const preorders = [];

export const usersMessages = [];

export const itemValues = {
  1: ' wersja podstawowa',
  2: 'wersja rozszerzona',
  3: 'full version + dodatki'
}
  


const StoreProvider = ({children}) => {
    const [items, setItems] = useState(itemsData);
    const [user, setUser] = useState(null)
    const [isMenuOpen , setIsMenuOpen] = useState(true)
    const [shoppingCart, setShoppingCart] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [registerOption, setRegisterOption] = useState(0);
    const [orderId, setOrderId] = useState(1);
    const [unregisteredUser, setUnregisteredUser] = useState(null);

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
            searchValue,
            setSearchValue,
            registerOption,
            setRegisterOption,
            orderId,
            setOrderId,
            unregisteredUser,
            setUnregisteredUser,
            }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;