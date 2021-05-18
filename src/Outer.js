import React from 'react'
import './CSS/Outer.css'
import Navbars from './js/Navbars'
import SignUp from './js/SignUp'
import {Link} from 'react-router-dom'


class Outer extends React.Component{
    render() {
        return (
            <div>
                <br />
                    <Navbars></Navbars>
                    <SignUp></SignUp>
            </div>
        )
    }
};

export default Outer;