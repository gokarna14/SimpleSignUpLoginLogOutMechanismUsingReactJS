import React, { useState } from 'react'
import './../CSS/navbar.css'
import _ from 'lodash'


function Navbars(){

    const[username, setusername] = useState('')
    const[password, setpassword] = useState('')

    const getCredentials = ()=> JSON.parse(localStorage.getItem('credentials') || "[]");


    const logIn = () =>{
        // start from here
    }


        return (
            <div>
                <div className='loginDetails'>  
                    <ul className="list-group list-group-horizontal-xl">
                        <li className="list-group-item">
                            <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} />
                        </li>
                        <li className="list-group-item">
                            <input type="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        </li>
                        <li>
                            <button className='btn btn-primary' onClick={logIn}>Log In</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default Navbars;