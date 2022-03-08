import React from 'react'

import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <>
            <div className='content-container footer'>
                <p>© 2022 Ryan matheus - Web Developer</p>
                <ul className='menu-icons'>
                    <li> <FaInstagram/> </li>
                    <li> <FaLinkedin/> </li>
                    <li> <FaGithubSquare/> </li>
                </ul>
            </div>
        </>
     );
}
 
export default Footer;