import React, { useContext, useState } from 'react';

import { dressesData, StoreContext } from '../../store/StoreProvider';
import DressDetails from './subcomponents/DressDetails';
import DressPopup from './subcomponents/DressPopup';

const AdminPanel = () => {
    const[ isOpenPopup, setIsOpenPopup] = useState(false);
    const { dresses } = useContext(StoreContext);
    const { setDresses } = useContext(StoreContext);

    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = (event) => {
        if(event){
        event.preventDefault()
        }
        setIsOpenPopup(false);
        setDresses(dressesData)
    }

    const dressesElement = dresses.map(dress => <DressDetails  key={dress.id} {...dress} />);

    return ( 
        <section>
            {dressesElement}
            <button onClick={showPopup}>Dodaj nowy kurs</button>
            <DressPopup isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={hidePopup} />
        </section>
     );
}
 
export default AdminPanel;