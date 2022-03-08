import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './Content.css'

const Content = ( { children, margin, anim } ) => {
    let classcss

    if (margin == 'right') {
        classcss = 'content right'
    } else if(margin == 'left') {
        classcss = 'content left'
    } else {
        classcss = 'content'
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return ( 
        <>
            <div data-aos={anim} margin={margin} className={classcss}>
                { children }
            </div>
        </>
     );
}
 
export default Content;