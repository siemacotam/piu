import React, { useContext, useState } from 'react';
import { itemsData, StoreContext } from '../../../store/StoreProvider';

import Modal from '../../Modal/Modal'

import './ItemPopup.css'

const ItemPopup = ({
    authors =[],
    hidePopup,
    isEditMode = true,
    isOpenPopup,
    id,
    img = '',
    price = 0,
    title = '',
    }) => {
    const [formAuthors, setFormAuthors] = useState(authors);
    const [formAuthor, setAuthor] = useState('');
    const [formImg, setFormImg]= useState(img);
    const [formPrice, setFormPrice] = useState(price);
    const [formTitle, setFormTitle] = useState(title);

    const { setItems } = useContext(StoreContext);

    const handleOnChangeAuthor = event => setAuthor(event.target.value);
    const handleOnChangeImg = event => setFormImg(event.target.value);
    const handleOnChangePrice= event => setFormPrice(event.target.value);
    const handleOnChangeTitle = event => setFormTitle(event.target.value);
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const itemObject = {
            authors: formAuthors,
            id,
            img: formImg,
            price: Number(formPrice),
            title: formTitle,
        }

        if(isEditMode){
            if(!authors || !id || !price || !title){
            alert('nie wypełniono wszystkich pozycji')
            return
            }

            const indexItemToUpdate = itemsData.findIndex(item => item.id === id)
            if(indexItemToUpdate === -1){
            alert('nie ma kursu o podanym id')
            return
            }

            itemsData.splice(indexItemToUpdate, 1, itemObject)

        } else {
            const newItem = {
                authors: formAuthors,
                id: Math.floor(Math.random() * 100000),
                img: formImg,
                price: Number(formPrice),
                title: formTitle,
            };

            if(!newItem.authors.length || !newItem.price || !newItem.title){
                alert('nie wypełniono wszystkich wymaganych danych')
                return
            }

            const isItemExist = itemsData.some(({title: currentTitle}) => currentTitle === newItem.title)
            if(isItemExist){
                alert('istnieje juz taki objekt')
                return
            }

            itemsData.push(newItem);
            setFormAuthors([])
            setFormImg('')
            setFormPrice(0)
            setFormTitle('')
        }

        setItems(itemsData)
        hidePopup()
    }


    const addAuthor = (e) => {
        e.preventDefault();

        setFormAuthors(prev => [...prev, formAuthor]);
        setAuthor('');
    };

    const deleteAuthor = (e) => {
        const authorToDelete = e.target.dataset.author;
        setFormAuthors(prev => prev.filter(author => author !== authorToDelete))
    }

    const authorsElements = formAuthors.map(author => (
        <li key={author}>
            <p>{author}</p>
            <button data-author={author} onClick={deleteAuthor}>usuń</button>
        </li>
    ))

    const correctLabel = isEditMode ? 'aktualizuj kurs' : 'Utwórz kurs';

    return ( 
        <Modal handleOnClose={hidePopup} isOpen={isOpenPopup} >
            <div className='item-popup'>
                <form className='item-popup__form' method='submit' onSubmit={handleOnSubmit}>
                    <div className='item-popup__form-row'>
                        <label>
                            Autor:
                            <input className='item-popup__input' type='text' value={formAuthor} onChange={handleOnChangeAuthor} />
                            <button onClick={addAuthor}>Dodaj Autora</button>
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Img url:
                            <input className='item-popup__input' type='text' value={formImg} onChange={handleOnChangeImg} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Cena:
                            <input className='item-popup__input' type='number' value={formPrice} onChange={handleOnChangePrice} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Tytuł:
                            <input className='item-popup__input' type='text' value={formTitle} onChange={handleOnChangeTitle} />
                        </label>
                    </div>
                    <button type='submit'>{correctLabel}</button>
                    <button onClick={hidePopup} type='button'>Anuluj</button>
                </form>
                <p>Lista autorów:</p>
                <ul>
                    {authorsElements}
                </ul>
            </div>
        </Modal>
     );
}
 
export default ItemPopup;