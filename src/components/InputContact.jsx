import React from 'react';

import './InputContact.css'

const InputContact = ({ type, placeholder } ) => {
    return ( 
        <>
            <input className={type} type={type} placeholder={placeholder} />
        </>
     );
}
 
export default InputContact;