import React, { useContext, useState } from 'react';

import { StoreContext, itemsData } from '../../store/StoreProvider';
import ItemDetails from './subcomponents/ItemDetails';
import ItemPopup from './subcomponents/ItemPopup';


const AdminPanel = () => {
    const[ isOpenPopup, setIsOpenPopup] = useState(false);
    const { items, setItems} = useContext(StoreContext);


    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = (event) => {
        if(event){
        event.preventDefault()
        }
        setIsOpenPopup(false);
        setItems(itemsData)
    }

    let itemsElement = items.map(item => <ItemDetails  key={item.id} {...item} />);


    return ( 
        <section>
            {itemsElement}
            <button onClick={showPopup}>Dodaj nowy kurs</button>
            <ItemPopup isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={hidePopup} />
        </section>
     );
}
 
export default AdminPanel;