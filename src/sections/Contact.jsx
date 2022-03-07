import React from 'react'

import './Contact.css'
import InputContact from '../components/InputContact';

const Contact = () => {
    return ( 
        <>
            <div className='content-container contact'>
                <InputContact type='email' placeholder='Email'/>
                <InputContact type='text' placeholder='Assunto'/>
                <InputContact type='textarea' placeholder='Descrição'/>
                <InputContact type='phone' placeholder='+55 (00) 0 0000-0000'/>
            </div>
        </>
     );
}
 
export default Contact;