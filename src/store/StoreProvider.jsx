import React, { createContext, 
    useEffect, 
    // useEffect,
    useState } from 'react';

// import request from '../helpers/request';

export const StoreContext = createContext(null)

export const dressesData = [
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 1,
      img: 'https://img-a.udemycdn.com/course/240x135/1673856_ff13_5.jpg',
      price: 69.99,
      title: 'Web developer od podstaw w 15 dni',
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 2,
      img: 'https://img-a.udemycdn.com/course/240x135/1844944_e2f8_3.jpg',
      price: 69.99,
      title: 'Zaawansowany front-end w 15 dni',
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 3,
      img: 'https://img-a.udemycdn.com/course/240x135/1916892_601a.jpg',
      price: 69.99,
      title: 'Programowanie w JavaScript',
    },
    {
      authors: ['Bartłomiej Borowczyk', 'Mateusz Domański'],
      id: 4,
      img: 'https://img-a.udemycdn.com/course/240x135/2049385_9a8c.jpg',
      price: 69.99,
      title: 'React od podstaw - teoria i praktyka',
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 5,
      img: 'https://img-a.udemycdn.com/course/240x135/2330558_0de2_2.jpg',
      price: 69.99,
      title: 'Backend - Node.js, Express i MongoDB',
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 6,
      img: 'https://img-a.udemycdn.com/course/240x135/2331806_b90c_2.jpg',
      price: 69.99,
      title: '(Zaawansowane) Projekty w CSS i JavaScript',
    },
    {
      authors: ['Bartłomiej Borowczyk'],
      id: 7,
      img: 'https://img-a.udemycdn.com/course/240x135/2258904_bd66_4.jpg',
      price: 0,
      title: 'Wprowadzenie do Git i GitHub',
    },
    {
      authors: ['Bartłomiej Borowczyk', 'Mateusz Domański', 'Michał Dziedziński', 'Kacper Sieradziński'],
      id: 8,
      img: 'https://img-a.udemycdn.com/course/240x135/3428814_eee3_4.jpg',
      price: 69.99,
      title: 'Programowanie obiektowe w JavaScript - opanuj, tworząc gry!'
    }
  ];

export const usersData = [
    {
      accessLevel: 0,
      budget: 150,
      Dresses: [
        dressesData[0].id,
        dressesData[1].id,
        dressesData[2].id,
      ],
      login: 'user',
      password: 'user',
    },
    {
      accessLevel: 1,
      budget: 1000000,
      courses: [
        dressesData.map(course => course.id)
      ],
      login: 'Admin',
      password: '******',
    }
  ];
  


const StoreProvider = ({children}) => {
    const [dresses, setDresses] = useState(dressesData);
    const [user, setUser] = useState(null)

    // const fetchData = async () => {
    //     const {data} = await  request.get('/dresses');

    //     setDresses(data.dresses);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    useEffect(() => {setDresses(dressesData)},[])

    return (
        <StoreContext.Provider value ={ {
            dresses, 
            setDresses ,
            user, 
            setUser}}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;