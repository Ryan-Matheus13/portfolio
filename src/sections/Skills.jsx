import React from 'react'

import Content from '../components/Content';
import GroupCardSkills from '../components/GroupCardSkills';
import './Skills.css'

const Skills = () => {
    return ( 
        <>
            <div className='content-container skills'>
                <GroupCardSkills></GroupCardSkills>
                <Content>
                    <h2 className='subtitle'>-Habilidades</h2>
                    <h1 className='title'>Por que me contratar para o próximo projeto?</h1>
                    <p className='text-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veritatis omnis voluptas repudiandae error, quod cum deserunt alias sunt asperiores, labore similique quas excepturi aut corporis porro rem, molestias nobis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veritatis omnis voluptas repudiandae error, quod cum deserunt alias sunt asperiores, labore similique quas excepturi aut corporis porro rem, molestias nobis?</p>
                </Content>
            </div>
        </>
     );
}
 
export default Skills;