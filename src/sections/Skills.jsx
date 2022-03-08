import React from 'react'

import Content from '../components/Content';
import GroupCardSkills from '../components/GroupCardSkills';

import './Skills.css'

const Skills = () => {
    return ( 
        <>
            <div data-aos='fade-up' className='content-container skills'>
                <GroupCardSkills></GroupCardSkills>
                <Content margin='left'>
                    <h2 className='subtitle'>-Habilidades</h2>
                    <h1 className='title'>Por que me contratar para o próximo projeto?</h1>
                    <p className='text-content'>Sou um programador flexível e me adapto muito facil as adversidades que podem ocorrer em qualquer projeto, sou focado, aprendo rápido, criativo e profissional. Se você me contratar não vai se arrepender do resultado entregue, será um código limpo e de fácil manutenção ou update futuro, moderno e responsivo no caso de sites. Quer saber mais um pouco sobre min? então basta só continuar explorando o portfólio abaixo.</p>
                </Content>
            </div>
        </>
     );
}
 
export default Skills;