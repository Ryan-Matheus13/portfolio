import React from 'react'
import './Button.css'

const Button = ( { className, children } ) => {
    return ( 
        <>
            <button className={`contact-button ${className}` }>{children}</button>
        </>
     );
}
 
export default Button;