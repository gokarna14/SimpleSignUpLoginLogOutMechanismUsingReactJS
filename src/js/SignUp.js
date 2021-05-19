import React, { useState } from 'react'
import './../CSS/SignUp.css'
import _ from 'lodash'
import swal from 'sweetalert'


const SignUp=() =>{
    const[name, setname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [pn, setpn] = useState('')
    const [password, setpassword] = useState('')
    const [push, setpush] = useState(true)
    const [show, setshow] = useState(false)
    const [message, setmessage] = useState(localStorage.getItem('message'))


    const getCredentials = () => JSON.parse(localStorage.getItem('credentials') || "[]")
    const getDetails = () => JSON.parse(localStorage.getItem('details') || "[]")
    
    
    const signUp = (e)=>{
        e.preventDefault()
        setshow(true)
        var credentials = getCredentials(),
        details = getDetails()
        var credential = {
            username: username,
            password: password
        }
        var p = !(credential.username === "" || credential.password === "")
        for(let i in credentials){
            if (!p){
                break
            }
            p = !(_.isEqual(credentials[i], credential))
        }
        setpush(p)
        setshow(p)
        if (p)
        {
            var detail = {
                name: name, 
                username: username,
                email: email,
                phoneNumber: pn,
                password: password,
                id:details.length
            }
    
            credentials.push(credential)
            details.push(detail)
    
            localStorage.setItem('details', JSON.stringify(details))
            localStorage.setItem('credentials', JSON.stringify(credentials))
            swal('Valid input', 'Your SignUp is completed succesfully. You can now proceed to login' ,'success')

        }
        else{
            swal('Invalid input', '!! Error !! \nEither account already exists with same details or Invalid input' ,'error')
        }
    }

    return(
        <div>
            <div className='all'>
                <div className='signUpInfo'>
                    New to facebook? SignUp here.
                    <br />
                    It's free and will always be.
                    <hr />
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
            </div>
            Welcome, this page belongs to PRABAS GOKARNA ADHIKARI
        </div>
    )
}

export default SignUp;