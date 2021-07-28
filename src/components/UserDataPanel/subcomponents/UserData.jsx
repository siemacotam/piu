import React, { useContext, useState } from 'react';

import { StoreContext, usersData } from '../../../store/StoreProvider';



const UserData = () => {
    const { user, setUser } = useContext(StoreContext)

    const[changeData, setChangeData] = useState(true)
    const[name, setName] = useState(user[0].name)
    const[email, setEmail] = useState(user[0].email)
    const[phone, setPhone] = useState(user[0].phone)

    // const { user, setUser } = useContext(StoreContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newDataUser = user[0]
        newDataUser.name = name
        newDataUser.email = email
        newDataUser.phone = phone
        
        const userIndex = usersData.findIndex(i => i.login === newDataUser.login)
        usersData.splice(userIndex , 1, newDataUser)
        console.log(usersData)
        setChangeData(!changeData)
    }
    
    const handleNameChange = (e) => {
        const newName = e.target.value
        setName(newName)
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)
    }

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value
        setPhone(newPhone)
    }

    return ( 
        <div className='userPanel'>
                <form onSubmit={handleSubmit} className=''>
                    <div className="">
                        <label >
                            <p>Login</p>
                            <input className='' type="text" disabled name='login' placeholder={user[0].login} value={user[0].login}/> <br />
                        </label>
                        <label >
                            <p>Imię:</p>
                             <input className='' disabled={changeData} type="text" placeholder={user[0].name} value={name} 
                             onChange={handleNameChange}/>
                        </label>
                        <label >
                            <p>Email:</p>
                             <input className='' disabled={changeData} type="email" placeholder={user[0].email} value={email} 
                             onChange={handleEmailChange}/>
                        </label>
                        <label >
                            <p>Telefon:</p>
                             <input className='' disabled={changeData} type="number" placeholder={user[0].phone} value={phone} 
                             onChange={handlePhoneChange}/>
                        </label>
                    </div>
                    <button disabled={changeData}>Edytuj</button>
                </form>
                 <button disabled={!changeData} onClick={() => {setChangeData(!changeData)}}>Zacznij Edycje</button> 
            </div>
     );
}
 
export default UserData;