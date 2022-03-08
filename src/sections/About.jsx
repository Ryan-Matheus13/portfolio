import React from 'react'

import './About.css'
import Content from '../components/Content';

const About = () => {
    return ( 
        <>
            <div className='content-container about'>
                <Content anim='fade-right' margin='right'>
                    <h2 className='subtitle'>-Sobre Min</h2>
                    <h1 className='title'>Um pouco mais sobre min.</h1>
                    <p className='text-content'>Olá a todos! me chamo Ryan Matheus, tenho 20 anos e sou apaixonado por tecnologia e programação, atualmente estou cursando ciências da computação pela estácio. Sou uma pessoal bastante calma, observador e curioso, curiosidade essa que fez eu me apaixonar por programação no ensino fundamental ao fazer um helicóptero usando arduino e garrafa pet, naquele primeiro contato com programação e foi amor a primeira vista e desde então sigo trilhando esse caminho procurando sempre aprender mais e inovar.</p>
                </Content>
                <div data-aos='zoom-in' className='perfil' />
            </div>
        </>
     );
}

export default About;