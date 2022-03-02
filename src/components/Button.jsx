import React from 'react'
import './Button.css'

const Button = ( { className } ) => {
    return ( 
        <>
            <button className={`contact-button ${className}` }>Contact Me</button>
        </>
     );
}
 
export default Button;