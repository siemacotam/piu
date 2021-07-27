import React, { useContext, useState } from 'react';
import { itemsData, StoreContext } from '../../../store/StoreProvider';

import Modal from '../../Modal/Modal'

import './ItemPopup.css'

const ItemPopup = ({
    hidePopup,
    isEditMode = true,
    isOpenPopup,
    id,
    img = '',
    price = 0,
    title = '',
    }) => {
    const [formImg, setFormImg]= useState(img);
    const [formPrice, setFormPrice] = useState(price);
    const [formTitle, setFormTitle] = useState(title);

    const { setItems } = useContext(StoreContext);

    const handleOnChangeImg = event => setFormImg(event.target.value);
    const handleOnChangePrice= event => setFormPrice(event.target.value);
    const handleOnChangeTitle = event => setFormTitle(event.target.value);
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const itemObject = {
            id,
            img: formImg,
            price: Number(formPrice),
            title: formTitle,
        }

        if(isEditMode){
            if(!id || !price || !title){
            alert('nie wypełniono wszystkich pozycji')
            return
            }

            const indexItemToUpdate = itemsData.findIndex(item => item.id === id)
            if(indexItemToUpdate === -1){
            alert('nie ma gry o podanym id')
            return
            }

            itemsData.splice(indexItemToUpdate, 1, itemObject)

        } else {
            const newItem = {
                id: Math.floor(Math.random() * 100000),
                img: formImg,
                price: Number(formPrice),
                title: formTitle,
            };

            if(!newItem.price || !newItem.title){
                alert('nie wypełniono wszystkich wymaganych danych')
                return
            }

            const isItemExist = itemsData.some(({title: currentTitle}) => currentTitle === newItem.title)
            if(isItemExist){
                alert('istnieje juz taki objekt')
                return
            }

            itemsData.push(newItem);
            setFormImg('')
            setFormPrice(0)
            setFormTitle('')
        }

        setItems(itemsData)
        hidePopup()
    }


    const correctLabel = isEditMode ? 'Aktualizuj pozycję' : 'Dodaj grę';

    return ( 
        <Modal handleOnClose={hidePopup} isOpen={isOpenPopup} >
            <div className='item-popup'>
                <form className='item-popup__form' method='submit' onSubmit={handleOnSubmit}>
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
            </div>
        </Modal>
     );
}
 
export default ItemPopup;