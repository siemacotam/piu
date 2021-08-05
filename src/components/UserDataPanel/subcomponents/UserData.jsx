import React, { useContext, useState } from 'react';

import { StoreContext, usersData } from '../../../store/StoreProvider';



const UserData = () => {
    const { user } = useContext(StoreContext)

    const { login, nameAndSurname , street, postCode, city, email, phone } = user[0]

    const[changeData, setChangeData] = useState(true)
    const[name, setName] = useState(nameAndSurname)
    const[mail, setMail] = useState(email)
    const[phoneNumb, setPhoneNumb] = useState(phone)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newDataUser = user[0]
        newDataUser.nameAndSurname = nameAndSurname
        newDataUser.email = email
        newDataUser.phone = phone
        
        const userIndex = usersData.findIndex(i => i.login === newDataUser.login)
        usersData.splice(userIndex , 1, newDataUser)
        setChangeData(!changeData)
    }
    
    const handleNameChange = (e) => {
        const newName = e.target.value
        setName(newName)
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value
        setMail(newEmail)
    }

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value
        setPhoneNumb(newPhone)
    }



    return ( 
        <div className='userPanel'>
                <form onSubmit={handleSubmit} className=''>
                    <div className="">
                        <label >
                            <p>Login</p>
                            <input className='' type="text" disabled name='login' placeholder={login} value={login}/> <br />
                        </label>
                        <label >
                            <p>Imię:</p>
                             <input className='' disabled={changeData} type="text" placeholder={nameAndSurname} value={name} 
                             onChange={handleNameChange}/>
                        </label>
                        <label >
                            <p>Email:</p>
                             <input className='' disabled={changeData} type="email" placeholder={email} value={mail} 
                             onChange={handleEmailChange}/>
                        </label>
                        <label >
                            <p>Telefon:</p>
                             <input className='' disabled={changeData} type="number" placeholder={phone} value={phoneNumb} 
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