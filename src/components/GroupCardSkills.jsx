import React from 'react'

import CardSkills from './CardSkills';
import './GroupCardSkills.css'

const GroupCardSkills = () => {
    return ( 
        <>
            <div className='card-container'>
                <CardSkills>
                    <div className='vector responsive-vector'></div>
                    <h3 className='card-title'>RESPONSIVIDADE</h3>
                    <p className='card-text-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </CardSkills>
                <CardSkills>
                    <div className='vector design-vector'></div>
                    <h3 className='card-title'>DESIGN MODERNO</h3>
                    <p className='card-text-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </CardSkills>
                <CardSkills>
                    <div className='vector criative-vector'></div>
                    <h3 className='card-title'>CRIATIVIDADE</h3>
                    <p className='card-text-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </CardSkills>
                <CardSkills>
                    <div className='vector code-vector'></div>
                    <h3 className='card-title'>CÓDIGO OTIMIZADO</h3>
                    <p className='card-text-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </CardSkills>
            </div>
        </>
     );
}
 
export default GroupCardSkills;