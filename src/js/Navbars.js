import React, { useState } from 'react'
import './../CSS/navbar.css'
import LoggedIn from './LoggedIn'
import _ from 'lodash'
import {Route, Link} from 'react-router-dom'


function Navbars(){

    const[username, setusername] = useState('')
    const[password, setpassword] = useState('')
    const[validUser, setvalidUser] = useState(false)

    const getCredentials = ()=> JSON.parse(localStorage.getItem('credentials') || "[]");
    const getDetails = () => JSON.parse(localStorage.getItem('details') || "[]")


    const logIn = () =>{
        var credentials = getCredentials(),
        details = getDetails(),
        credential = {
            username: username,
            password: password,
        }
        var p = false

        for (let i in credentials){
            if(_.isEqual(credential, credentials[i])){
                setvalidUser(true)
                p = true
                localStorage.setItem('id', details[i]['id'])
                break
            }
        }
        localStorage.setItem('userinput', JSON.stringify(credential))
        localStorage.setItem('valid', p)
    }


        return (
            <div>
            <form>
                <div className='loginDetails'>  
                <h5>Login to your existing account here:</h5>
                    <ul className="list-group list-group-horizontal-xl">
                        <li className="list-group-item">
                            <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} />
                        </li>
                        <li className="list-group-item">
                            <input type="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        </li>
                        <li>
                            <Link to={{
                                pathname:'/LoggedIn',
                                validz : validUser
                            }}>
                                <button type='submit' className='btn btn-primary' onClick={logIn}>Log In</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </form>
                
            </div>
        )
}

export default Navbars;