import React from 'react'
import {NavLink} from "react-router-dom"
import {connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks =(props)=>{
    return(
        <div className="float-right ">
            <ul className=" navbar-nav ">
                <li className="nav-item"><NavLink className="nav-link text-white" to='/create'>New Project</NavLink></li>
                <li className="nav-item"><a onClick={props.signOut} className="nav-link text-white" role="button" href="#">Log Out</a></li>
                <li className="nav-item"><NavLink className="nav-link text-white btn btn-primary rounded-circle btn-sm " to='/'>{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)