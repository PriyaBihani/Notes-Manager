import React from 'react'
import {Link} from "react-router-dom"
import SignedInLinks  from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar =(props)=>{
    console.log(props)
    const {auth,profile}= props
    const links= auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-dark mb-5 ">
            <div className="container">
                <Link to='/' className="navbar-brand text-white" >MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps =(state)=>{
    console.log(state)
    return{
        // they are basically acquiring the authentication and profile object from firebase and storing it in these property.
        auth: state.firebase.auth, // In auth object there is a property which is called uid. It is used to tracking the auth status whether a user is logged in or out.
        profile: state.firebase.profile// it is grabbing the profile object or property from the firebase. Profile property is not available normally.We  have to turn it on the index.js and tell it which collectiion to look for.
    }
}

export default connect(mapStateToProps)(Navbar)