import React from 'react'

import './Contact.css'
import InputContact from '../components/InputContact';
import InputTextarea from '../components/InputTextarea';
import Button from '../components/Button'

const Contact = () => {
    return ( 
        <>
            <div className='contact-container' id='contact'>
                <div data-aos='fade-up' className='content-container contact'>
                    <div className='ilustration-contact' />
                    <form className='content-contact'>
                        <h1>Vamos fazer um projeto juntos?</h1>
                        <InputContact name='email' type='email' placeholder='Email'/>
                        <InputContact name='assunto' type='text' placeholder='Assunto'/>
                        <InputTextarea name='descricao' type='textarea' placeholder='Descrição'/>
                        <InputContact name='telefone' type='phone' placeholder='Whatsapp'/>
                        <Button type='submit'>Enviar proposta</Button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default Contact;