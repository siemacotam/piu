import React, { useContext, useState } from 'react';
import { dressesData, StoreContext } from '../../../store/StoreProvider';

import Modal from '../../Modal/Modal'

import './DressPopup.css'

const DressPopup = ({
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

    const { setDresses } = useContext(StoreContext);

    const handleOnChangeAuthor = event => setAuthor(event.target.value);
    const handleOnChangeImg = event => setFormImg(event.target.value);
    const handleOnChangePrice= event => setFormPrice(event.target.value);
    const handleOnChangeTitle = event => setFormTitle(event.target.value);
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const dressObject = {
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

            const indexDressToUpdate = dressesData.findIndex(dress => dress.id === id)
            if(indexDressToUpdate === -1){
            alert('nie ma kursu o podanym id')
            return
            }

            dressesData.splice(indexDressToUpdate, 1, dressObject)

        } else {
            const newDress = {
                authors: formAuthors,
                id: Math.floor(Math.random() * 100000),
                img: formImg,
                price: Number(formPrice),
                title: formTitle,
            };

            if(!newDress.authors.length || !newDress.price || !newDress.title){
                alert('nie wypełniono wszystkich wymaganych danych')
                return
            }

            const isDressExist = dressesData.some(({title: currentTitle}) => currentTitle === newDress.title)
            if(isDressExist){
                alert('istnieje juz taki objekt')
                return
            }

            dressesData.push(newDress);
            setFormAuthors([])
            setFormImg('')
            setFormPrice(0)
            setFormTitle('')
        }

        setDresses(dressesData)
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
            <div className='dress-popup'>
                <form className='dress-popup__form' method='submit' onSubmit={handleOnSubmit}>
                    <div className='dress-popup__form-row'>
                        <label>
                            Autor:
                            <input className='dress-popup__input' type='text' value={formAuthor} onChange={handleOnChangeAuthor} />
                            <button onClick={addAuthor}>Dodaj Autora</button>
                        </label>
                    </div>
                    <div className='dress-popup__form-row'>
                        <label>
                            Img url:
                            <input className='dress-popup__input' type='text' value={formImg} onChange={handleOnChangeImg} />
                        </label>
                    </div>
                    <div className='dress-popup__form-row'>
                        <label>
                            Cena:
                            <input className='dress-popup__input' type='number' value={formPrice} onChange={handleOnChangePrice} />
                        </label>
                    </div>
                    <div className='dress-popup__form-row'>
                        <label>
                            Tytuł:
                            <input className='dress-popup__input' type='text' value={formTitle} onChange={handleOnChangeTitle} />
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
 
export default DressPopup;