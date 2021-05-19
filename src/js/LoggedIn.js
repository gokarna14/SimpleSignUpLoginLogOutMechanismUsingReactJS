import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import {Route, Link} from 'react-router-dom'

function LoggedIn (){

    const {validz, search} = useLocation(); //pass prop using link from navbar.js, access by using 'validz'

    const getInput = () => localStorage.getItem('userinput')
    const isValid = () => localStorage.getItem('valid')

    const[valid, setvalid] = useState(isValid() === 'true')
    const[id, setid] = useState(localStorage.getItem('id'))

    const logOut = ()=>{
        localStorage.setItem('valid', 'false')
    }

    return(
        <div>
            {
                (
                    ()=>{
                        if(valid){
                            return (
                                <div>
                                    <div>
                                        <Link to = '/LogOut'>
                                            <button onClick={logOut}>Logout</button>
                                        </Link>
                                    </div>
                                
                                   <h1>Login Successful !</h1> 
                                   
                                   <p> 
                                   <Link to = '/Information'>
                                        Click here
                                   </Link> to see your information.</p> 
                                </div>
                            )
                        }
                        else{
                            return (
                                <div>
                                    <h1>Login Failed, Please check your credentials and try again</h1>
                                </div>
                            )
                        }
                    }
                )()
            }

            <hr />
            <br />
            <div className='back' >
                <Link to='/'>
                    <h2>Back</h2>
                </Link>
            </div>
            
        </div>
    )

}

export default LoggedIn;