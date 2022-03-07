import React from 'react'
import Button from '../components/Button';

import Content from '../components/Content';
import Menu from '../components/Menu';
import './Header.css'

const Header = () => {
    return ( 
        <>
            <div className='header-container'>
                <Menu/>
                <div className='content-container header'>
                    <Content margin='right' className='introduction'>
                        <h2 className='subtitle'>-Introdução</h2>
                        <h1 className='title'>Olá meu nome é Ryan, seja bem vindo!</h1>
                        <p className='text-content'>Esse é o meu portfólio web, será onde eu apresentarei meu trabalho com os detalhes necessários, tais como sites, sistemas, apps entre outros, se gostar do que vai ver e está a procura de um programador que vai realmente lhe entregar resultado e com eficiência basta só me chamar em um dos contatos que será exibido clicando no botão abaixo!</p>
                        <Button className='header-button' />
                    </Content>
                    <div className='ilustration'/>
                </div>
            </div>
        </>
     );
}
 
export default Header;