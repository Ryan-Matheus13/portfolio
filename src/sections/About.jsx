import React from 'react'

import Content from '../components/Content';

const About = () => {
    return ( 
        <>
            <div className='content-container'>
                <Content>
                    <h2 className='subtitle'>-Sobre Min</h2>
                    <h1 className='title'>Um pouco mais sobre min.</h1>
                    <p className='text-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veritatis omnis voluptas repudiandae error, quod cum deserunt alias sunt asperiores, labore similique quas excepturi aut corporis porro rem, molestias nobis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veritatis omnis voluptas repudiandae error, quod cum deserunt alias sunt asperiores, labore similique quas excepturi aut corporis porro rem, molestias nobis?</p>
                </Content>
                <div className='perfil' />
            </div>
        </>
     );
}
 
export default About;