import React from 'react'
import './Button.css'

const Button = ( { className } ) => {
    return ( 
        <>
            <button className={`contact-button ${className}` }>Entrar em Contato</button>
        </>
     );
}
 
export default Button;