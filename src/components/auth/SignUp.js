// what really happens??
// whenever any component is imported somewhere the first line that gets executed is export one. Thats why we can see dispatch and state in this component Props.
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

export class SignUp extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        console.log(this.props)
        const {auth,authError}=this.props
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h5 >Sign Up</h5>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type ="email" id="email" className="form-control"onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type ="password" id="password" className="form-control" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type ="text" id="firstName" className="form-control"onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type ="text" id="lastName" className="form-control"onChange={this.handleChange} />
                  </div>
                  <div>
                      <button className="btn btn-info">SignUp</button>
                  </div>
                  <div className="text-danger text-center text-uppercase">
                    { authError ? <p>{authError}</p>:null}
                  </div>
                </form>
            </div>
        )
    }
}
// when the component loads it connects the auth and authError property which is returned by this function to the props regardless whether the function or property is called by the component or not.
const mapStateToProps =(state)=>{// state here is the object passed in the root REducer function
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError // when the sign up actions dispatches and get to the reducer. It updates the state authError property and we are now getting it here and attcahing to our props.
    }
}

//when the component first load it connects the signup property which is returned by this function to the props regardless whether the function or property is called by the component or not.
const mapDispatchToProps =(dispatch)=>{
    return{
        signUp: (newUser)=>dispatch(signUp(newUser))// When the signUp action is called it dispatches an action creator which intereact with the database. After that it dispatches and action and then the auth reducer updates the state.
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
