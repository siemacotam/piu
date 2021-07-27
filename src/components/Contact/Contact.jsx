import React, { useState } from 'react';

import Map from './subcomponents/Map';
import { Prompt } from 'react-router';
import './Contact.css'
import { usersMessages } from '../../store/StoreProvider'; 

const Contact = () => {
    const [note, setNote] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEmpty, setIsEmpty] = useState(true)

    const handleNameChange = (e) => {
        const userName = e.target.value;
        setName(userName)
    }

    const handleMailChange = (e) => {
        const userMail = e.target.value;
        setEmail(userMail)
    }

    const handleNoteChange = (e) => {
        const newNote = e.target.value;
        setNote(newNote)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(note && email && name){
        const message = {name , email, note}
        usersMessages.push(message)

        setName('')
        setEmail('')
        setNote('')
        alert('wiadomość wysłana')
        } else {
            alert('wypelnij wszystkie pola')
        }
    }


    return ( 
        <>
            <div className='contactInfo'>
                <h4 className='contactInfo__title'>Piu Games</h4>
                <p className='contactInfo__text'>Migdałowa 21, 62-800 Kalisz</p>
                <p className='contactInfo__text'>791090708</p>
                <p className='contactInfo__mail'>g.celek@gmail.com</p>
                <div className='contactInfo__map'><Map /></div>
            </div>      
            <div className='contactForm'>
                <h4 className='contactForm__title'>Masz sprawę? Napisz do nas !</h4>
                <form onSubmit={handleSubmit}>
                    <label className='contactForm__label'> <p>Imię: </p>
                        <input className='contactForm__input' type="text" value={name} onChange={handleNameChange}/>
                    </label><br />
                    <label className='contactForm__label'><p>Email: </p>
                        <input className='contactForm__input' type="email" value={email} onChange={handleMailChange} />
                    </label>
                    <textarea className='contactForm__text-area' name="" id="" cols="30" rows="5" placeholder='Wpisz wiadomość...' value={note} onChange={handleNoteChange}>

                    </textarea><br/>
                    <button className='contactForm__button' type='submit'>Wyślij</button>
                </form>
                <Prompt
                when={!isEmpty}
                message='Masz wpisaną wiadomość w formularzu? czy na pewno chcesz opuścic stronę ?' />
            </div>
        </>
     );
}
 
export default Contact;