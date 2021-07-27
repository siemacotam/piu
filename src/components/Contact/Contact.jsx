import React, { useState } from 'react';

import './Contact.css'

const Contact = () => {
    const [note, setNote] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEmpty, setIsEmpty] = useState(true)


    return ( 
        <div>
            dzwoń
        </div>
     );
}
 
export default Contact;