import React from 'react'
import {NavLink} from "react-router-dom"

const SignedOutLinks =()=>{
    return(
        <div className="float-right ">
            <ul className="navbar-nav ">
                <li className="nav-item"><NavLink className="nav-link text-white" to='/signup'>Signup</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-white" to='/signin'>Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks