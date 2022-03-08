import React from 'react'

import './InputContact.css'

const InputTextarea = ( { type, placeholder } ) => {
    return ( 
        <>
            <textarea className={type} name="descricao" placeholder={placeholder} ></textarea>
        </>
     );
}
 
export default InputTextarea;