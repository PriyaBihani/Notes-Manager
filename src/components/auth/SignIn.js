import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {Redirect } from 'react-router-dom'

export class SignIn extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const {authError,auth} = this.props
        if(auth.uid) return <Redirect to='/'/> // this is called route guarding
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h5 >Sign In</h5>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type ="email" id="email" className="form-control"onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type ="password" id="password" className="form-control" onChange={this.handleChange} />
                  </div>
                  <div>
                      <button className="btn btn-info">Login</button>
                  </div>
                  <div className="text-danger text-center text-uppercase">
                    { authError ? <p>{authError}</p>:null}
                  </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth // it is basically acuring the authentication property in firebase and mapping it to the props, which has a property auth uid which helps in keeping track whether a user is logged in or not. 
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signIn: (creds)=>{ dispatch(signIn(creds))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
