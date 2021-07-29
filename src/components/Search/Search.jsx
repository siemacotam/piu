import React, { useContext, useEffect, useState } from 'react';

import Item from '../Item/Item';

import { StoreContext } from '../../store/StoreProvider';
import './Search.css'

const Search = () => {
    const { searchValue, setSearchValue } = useContext(StoreContext);
    const { items } = useContext(StoreContext)

    const handleChange = (e) => {
        const value = e.target.value
        const littleLettersValue = value.toLowerCase()
        setSearchValue(littleLettersValue)
    }

    // useEffect(()=>{setSearchValue('')}, [searchValue])

    const searchedItem = items.filter(i =>
        //  i.title.toLowerCase() === searchValue )
            !(i.title.toLowerCase().indexOf(`${searchValue}`)))

    const foundItem = searchedItem.map(item => <Item key={item.id} {...item}/>)


    const itemsElements = searchValue ? foundItem : <p className='searchForm__info'>Czego szukasz ?</p>

    return ( 
        <section className='searchForm'>
            <div className="searchPanelWrap">
                <input className='searchForm__input' type="text" value={searchValue} onChange={handleChange} /> <br />
                <button className='searchForm__button' onClick={() => {setSearchValue('')}}>Wyczyść</button>
            </div>
            {itemsElements}
            {foundItem.length === 0 ? <p className='searchForm__info'>brak wyszukiwanych elementów</p> : null}
        </section>

     );
}
 
export default Search;