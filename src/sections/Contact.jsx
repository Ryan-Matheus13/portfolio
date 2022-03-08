import React from 'react'

import './Contact.css'
import InputContact from '../components/InputContact';
import InputTextarea from '../components/InputTextarea';
import Button from '../components/Button'

const Contact = () => {
    return ( 
        <>
            <div className='contact-container'>
                <div className='content-container contact'>
                    <div className='ilustration-contact' />
                    <div className='content-contact'>
                        <h1>Vamos fazer um projeto juntos?</h1>
                        <InputContact type='email' placeholder='Email'/>
                        <InputContact type='text' placeholder='Assunto'/>
                        <InputTextarea type='textarea' placeholder='Descrição'/>
                        <InputContact type='phone' placeholder='+55 (00) 0 0000-0000'/>
                        <Button>Enviar proposta</Button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contact;