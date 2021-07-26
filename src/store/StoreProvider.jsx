import React, { createContext, 
    useEffect, 
    // useEffect,
    useState } from 'react';

// import request from '../helpers/request';

export const StoreContext = createContext(null)

export const itemsData = [
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 1,
      img: 'https://img-a.udemycdn.com/course/240x135/1673856_ff13_5.jpg',
      price: 69.99,
      title: 'Tibia',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 2,
      img: 'https://img-a.udemycdn.com/course/240x135/1844944_e2f8_3.jpg',
      price: 69.99,
      title: 'Warcraft 3',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 3,
      img: 'https://img-a.udemycdn.com/course/240x135/1916892_601a.jpg',
      price: 69.99,
      title: 'Starcraft',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk', 'Mateusz Domański'],
      id: 4,
      img: 'https://img-a.udemycdn.com/course/240x135/2049385_9a8c.jpg',
      price: 69.99,
      title: 'Diablo 3',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 5,
      img: 'https://img-a.udemycdn.com/course/240x135/2330558_0de2_2.jpg',
      price: 69.99,
      title: 'Counter-strike',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 6,
      img: 'https://img-a.udemycdn.com/course/240x135/2331806_b90c_2.jpg',
      price: 69.99,
      title: 'Doom',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 7,
      img: 'https://img-a.udemycdn.com/course/240x135/2258904_bd66_4.jpg',
      price: 0,
      title: 'Wolfenstein',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
    },
    {
      authors: ['Bartłomiej Borowczyk', 'Mateusz Domański', 'Michał Dziedziński', 'Kacper Sieradziński'],
      id: 8,
      img: 'https://img-a.udemycdn.com/course/240x135/3428814_eee3_4.jpg',
      price: 69.99,
      title: 'Angry birds',
      rate:[],
      platform:'PC',
      distribution:'Steam',
      version:'Polska',
      pegi:'13',
      amount: 0,
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