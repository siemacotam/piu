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
    version= 1,
    rate= [],
    category='',
    discount= 1,
    distribution= '',
    language='',
    link='',
    pegi='',
    platform='',
    type= 4,
    }) => {

    const gameTypes = ['new' , 'cut', 'bestseller', '']

    const [formImg, setFormImg]= useState(img);
    const [formPrice, setFormPrice] = useState(price);
    const [formTitle, setFormTitle] = useState(title);
    const [formCategory, setFormCategory] = useState(category);
    const [formDiscount, setFormDiscount] = useState(discount);
    const [formDistribution, setFormDistribution] = useState(distribution);
    const [formLanguage, setFormLanguage] = useState(language);
    const [formLink, setFormLink] = useState(link);
    const [formPegi, setFormPegi] = useState(pegi);
    const [formPlatform, setFormPlatform] = useState(platform);
    const [formType, setFormType] = useState(type);

    const { setItems } = useContext(StoreContext);

    const handleOnChangeImg = event => setFormImg(event.target.value);
    const handleOnChangePrice= event => setFormPrice(event.target.value);
    const handleOnChangeTitle = event => setFormTitle(event.target.value);
    const handleOnChangeDiscount = event => setFormDiscount(event.target.value);
    const handleOnChangePegi = event => setFormPegi(event.target.value);
    const handleOnChangeType = event => setFormType(event.target.value)
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const itemObject = {
            id,
            img: formImg,
            price: Number(formPrice),
            title: formTitle,
            version: 1,
            rate: [],
            category:'',
            discount:formDiscount,
            distribution: '',
            language:'',
            link:'',
            pegi:formPegi,
            platform:'',
            type: gameTypes[formType -1],
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
                id: itemsData[itemsData.length - 1].id + 1,
                img: formImg,
                price: Number(formPrice),
                title: formTitle,
                version: 1,
                rate: [],
                category:'',
                discount:formDiscount,
                distribution: '',
                language:'',
                link:'',
                pegi:formPegi,
                platform:'',
                type:gameTypes[formType -1],

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
            setFormDiscount(1)
            setFormPegi(0)
            setFormType(4)
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
                            Tytuł: *
                            <input className='item-popup__input' type='text' value={formTitle} onChange={handleOnChangeTitle} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Img url: *
                            <input className='item-popup__input' type='text' value={formImg} onChange={handleOnChangeImg} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Cena: *
                            <input className='item-popup__input' type='number' value={formPrice} onChange={handleOnChangePrice} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Zniżka (gdy mamy typ cut- wartość w postaci dziesiętnej - np 20% to 0,2):
                            <input className='item-popup__input' type='number' value={formDiscount} onChange={handleOnChangeDiscount} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Pegi
                            <input className='item-popup__input' type='number' value={formPegi} onChange={handleOnChangePegi} />
                        </label>
                    </div>
                    <div className='item-popup__form-row'>
                        <label>
                            Typ:
                            <select value={formType} onChange={handleOnChangeType}>
                                <option value="1">new</option>
                                <option value="2">cut</option>
                                <option value="3">bestseller</option>
                                <option value="4">brak</option>
                            </select>
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