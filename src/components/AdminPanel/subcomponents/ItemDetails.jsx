import React, { useContext, useState } from 'react';
import { itemsData, StoreContext } from '../../../store/StoreProvider';
import ItemPopup from './ItemPopup';

const ItemDetails = (props) => {
    const[ isOpenPopup, setIsOpenPopup] = useState(false);
    const { id, title } =props;
    const { setItems } = useContext(StoreContext)

    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = (event) => {
        if(event){
            event.preventDefault()
            }
        setIsOpenPopup(false);
    }

    const handleDeleteItem = () => {
        const indexItemToDelete = itemsData.findIndex(item => item.id ===id)
        if(indexItemToDelete === -1){alert('nie znaleziono kursu')}

        itemsData.splice(indexItemToDelete, 1)

        setItems(prev => prev.filter(item => item.id !== id))

    }

    return ( 
        <details>
            <summary>{title}</summary>
            <button onClick={showPopup}>Edytuj</button>
            <button onClick={handleDeleteItem}>Usuń</button>
            <ItemPopup  {...props} isOpenPopup={isOpenPopup} hidePopup={hidePopup}/>
        </details>
     );
}
 
export default ItemDetails;