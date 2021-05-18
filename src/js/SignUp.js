import React, { useState } from 'react'
import './../CSS/SignUp.css'
import _ from 'lodash'


const SignUp=() =>{

    const[name, setname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [pn, setpn] = useState('')
    const [password, setpassword] = useState('')
    const [push, setpush] = useState(true)
    const [show, setshow] = useState(false)


    const getCredentials = () => JSON.parse(localStorage.getItem('credentials') || "[]")
    const getDetails = () => JSON.parse(localStorage.getItem('details') || "[]")
    
    const signUp = ()=>{
        var credentials = getCredentials(),
        details = getDetails(),
        detail = {
            name: name, 
            username: username,
            email: email,
            phoneNumber: pn,
            password: password,
            id:details.length
        }
        var p = !(detail.username === "" || detail.password === "")
        for(let i in details){
            if (!p){
                break
            }
            p = !(_.isEqual(details[i], detail))
        }
        setpush(p)
        setshow(p)
        if (p)
        {
            var credential = {
                username: username,
                password: password
            }
    
            credentials.push(credential)
            details.push(detail)
    
            localStorage.setItem('details', JSON.stringify(details))
            localStorage.setItem('credentials', JSON.stringify(credentials))
        }
    }

    return(
        <div>
            <div className='signUpInfo'>
                New to facebook? SignUp here.
                <br />
                It's free and will always be.
            </div>
            <form>
                <ul className='signUp'>
                    <li>
                        <input type="text" placeholder='Name' onChange={(e)=>{setname(e.target.value)}} />
                    </li>
                    <li>
                        <input type="text" placeholder='Email' onChange={(e)=>{setemail(e.target.value)}} />
                    </li>
                    <li>
                        <input type="text" placeholder='Phone number' onChange={(e)=>{setpn(e.target.value)}} />
                    </li>
                    <li>
                        <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} />
                    </li>
                    <li>
                        <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} />
                    </li>
                    <li>
                        <button type='submit' className="btn btn-secondary" onClick={signUp} >Sign Up</button>
                    </li>
                </ul>
            </form>
            
            {
                (
                    () =>{
                        if(push && !show){
                            return <h1>Namaste</h1>
                        }
                        else if (push && show){
                            return <h1>Details Successfully Stored! Please proceed to login.</h1>
                        }
                        else{
                            return <h1>Error!! Invalid Input or Account already registered with the same details.</h1>
                        }
                    }
                )()
            }
            <h1>{email}</h1>
        </div>
    )
}

export default SignUp;