import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails =(props)=>{
     console.log(props)
     const { project,auth } = props
     if (!auth.uid) return <Redirect to='/signin'/>
     if(project){
         return(
            <div className="container project-details">
                <div className="card">
                    <div className="card-header">
                        {project.title}
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <p>{project.content}</p>
                        </div>
                        <div className="card-title">
                            <div>Posted by {project.authorFirstName}{project.authorLastName}</div> 
                            <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
            </div>
         )
     }else{
        return(
            <div className="container text-center">
                <p>Loading project...</p>
            </div>
        )
     }

}

const mapStateToProps =(state, ownProps)=>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project= projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'} // this tells the firestore REducer about the collection. And mapState to props actually provide the data from the reducer to the content.
    ])
)(ProjectDetails)