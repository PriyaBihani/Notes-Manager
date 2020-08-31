import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject} from '../../store/actions/projectActions' // action creator
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state={
        title:'',
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)// this is the property of mapDispatchtoprops. We are calling it to store in some state
        this.props.history.push('/')
    }
    render(){
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5 >Create Project</h5>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type ="text" id="title" className="form-control"onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content">Content</label>
                      <textarea className="form-control" placeholder="Add Content" id="content" onChange={this.handleChange} ></textarea>
                    </div>
                    <button className="btn btn-info">Create</button>

                </form>
            </div>
        )
    }
} 

//Dispatch is a method given by connect.We are calling it inside the property createProject and stored this property inside the props. Now whenever we tried to call the create projet property from the props it seems something like this. We call the dispatch function then in turn it calls the action creator. 

const mapStateToProps =(state)=>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        createProject: (project)=> dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)