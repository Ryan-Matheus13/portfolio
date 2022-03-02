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
                    <Content>
                        <h2 className='subtitle'>-Introdução</h2>
                        <h1 className='title'>Olá meu nome é Ryan, seja bem vindo!</h1>
                        <p className='text-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veritatis omnis voluptas repudiandae error, quod cum deserunt alias sunt asperiores, labore similique quas excepturi aut corporis porro rem, molestias nobis?</p>
                        <Button className='header-button' />
                    </Content>
                    <div className='ilustration'></div>
                </div>
            </div>
        </>
     );
}
 
export default Header;