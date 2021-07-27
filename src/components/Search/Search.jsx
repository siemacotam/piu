import React, { useContext, useState } from 'react';

import Item from '../Item/Item';

import { StoreContext } from '../../store/StoreProvider';
import './Search.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const { items } = useContext(StoreContext)

    const handleChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

    const searchedItem = items.filter(i =>
        //  i.title.toLowerCase() === searchValue )
            !(i.title.toLowerCase().indexOf(`${searchValue}`)))

    const foundItem = searchedItem.map(item => <Item key={item.id} {...item}/>)


    const itemsElements = searchValue ? foundItem : <p>Czego szukasz ?</p>

    console.log(foundItem)
    return ( 
        <section className='searchForm'>
            <input type="text" value={searchValue} onChange={handleChange} />
            <button onClick={() => {setSearchValue('')}}>Wyczyść</button>
            {itemsElements}
            {foundItem.length === 0 ? <p>brak wyszukiwanych elementów</p> : null}
        </section>

     );
}
 
export default Search;