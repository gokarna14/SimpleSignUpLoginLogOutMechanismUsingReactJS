import React from 'react'
import './CSS/Outer.css'
import Navbars from './js/Navbars'
import SignUp from './js/SignUp'
import LoggedIn from './js/LoggedIn'
import {Route, Link} from 'react-router-dom'
import LogOut from './js/LogOut'
import Information from './js/Information'



class Outer extends React.Component{
    render() {
        return (
            <div>
                <br />
                <Route path='/' exact>
                    <Navbars></Navbars>
                    <SignUp></SignUp>
                </Route>
                <Route path='/LoggedIn' component={LoggedIn} exact>
                    <LoggedIn></LoggedIn>
                </Route>
                <Route path='/LogOut' component={LogOut} exact>
                    <LogOut></LogOut>
                </Route>
                <Route path='/Information' component={Information}>
                    <Information></Information>
                </Route>
            </div>
        )
    }
};

export default Outer;