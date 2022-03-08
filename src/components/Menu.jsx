import React from 'react'
import './Menu.css'

import { FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Button from './Button';

const Menu = () => {
    return ( 
        <>
            <nav>
                <ul data-aos='fade-down' className='menu-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <ul data-aos='fade-down' className='menu-icons'>
                    <li> <FaInstagram/> </li>
                    <li> <FaLinkedin/> </li>
                    <li> <FaGithubSquare/> </li>
                    <Button className='menu-button'>Entrar em contato</Button>
                </ul>
            </nav>
        </>
     );
}
 
export default Menu;