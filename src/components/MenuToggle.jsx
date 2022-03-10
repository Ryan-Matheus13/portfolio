import React from 'react'

import './MenuToggle.css'

import { RiMenuFill } from 'react-icons/ri'

const Menutoggle = () => {
    return ( 
        <>
            <div className='menu-toggle'>
                <button>
                    <RiMenuFill></RiMenuFill>
                </button>
            </div>
        </>
     );
}
 
export default Menutoggle;