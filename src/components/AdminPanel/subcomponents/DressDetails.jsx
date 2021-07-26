import React, { useContext, useState } from 'react';
import { dressesData, StoreContext } from '../../../store/StoreProvider';
import DressPopup from './DressPopup';

const DressDetails = (props) => {
    const[ isOpenPopup, setIsOpenPopup] = useState(false);
    const { id, title } =props;
    const { setDresses } = useContext(StoreContext)

    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = (event) => {
        if(event){
            event.preventDefault()
            }
        setIsOpenPopup(false);
    }

    const handleDeleteItem = () => {
        const indexDressToDelete = dressesData.findIndex(dress => dress.id ===id)
        if(indexDressToDelete === -1){alert('nie znaleziono kursu')}

        dressesData.splice(indexDressToDelete, 1)

        setDresses(prev => prev.filter(dress => dress.id !== id))

    }

    return ( 
        <details>
            <summary>{title}</summary>
            <button onClick={showPopup}>Edytuj</button>
            <button onClick={handleDeleteItem}>Usuń</button>
            <DressPopup  {...props} isOpenPopup={isOpenPopup} hidePopup={hidePopup}/>
        </details>
     );
}
 
export default DressDetails;