import React from 'react'
import './CardSkills.css'

const CardSkills = ( { children } ) => {
    return ( 
        <>
            <div className='card'>
                {children}
            </div>
        </>
     );
}
 
export default CardSkills;