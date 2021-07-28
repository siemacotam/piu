import React, { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';

const UserDataPanel = () => {
    const { user } = useContext(StoreContext)

    return ( 
        <div>
            <p> Witaj {user[0].login}</p>
        </div>
     );
}
 
export default UserDataPanel;