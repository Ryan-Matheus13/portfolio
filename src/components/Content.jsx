import React from 'react'
import './Content.css'

const Content = ( { children, margin } ) => {
    let classcss

    if (margin == 'right') {
        classcss = 'content right'
    } else if(margin == 'left') {
        classcss = 'content left'
    } else {
        classcss = 'content'
    }

    return ( 
        <>
            <div margin={margin} className={classcss}>
                { children }
            </div>
        </>
     );
}
 
export default Content;