import React from 'react'
import './ar.css'
import {Link} from 'react-router-dom'

function AlwaysRendering(){
    return(
        <div>
                <div className='titleLine'>
                    <Link to = ''>
                        <span className='mainTitle'> facebook</span>
                    </Link>
            </div>
        </div>
    )
}

export default AlwaysRendering;