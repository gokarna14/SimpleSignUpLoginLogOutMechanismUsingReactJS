import React from 'react'
import {Link} from 'react-router-dom'


const LogOut = ()=>{
    return(
        <div>
            <h1>
                Logout Successful
            </h1>
            <h3>
                <Link to ='/'>
                    Go to Homepage and Login/SignUp
                </Link>
            </h3>
        </div>
    )
}

export default LogOut;