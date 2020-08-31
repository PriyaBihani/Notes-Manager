import React, { Component } from "react"
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import{ Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render(){
        // console.log(this.props)
        const { projects,auth,notifications }= this.props
        if(!auth.uid) return <Redirect to ='/signin'/> // it is router guarding
        return(
            <div className="container dashboard">
              <div className="row">
                <div className="col-md-6 ">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col-md-6">
                    <Notifications notifications={notifications}/>
                </div>
              </div>
            </div>
        )
    }
}
// RETRIEVING the data from the state of the root reducer
// the state here is the object passed in the root reducer
// project here is the project from the rootreducer where we combine the reducers
// Now this projects is added as a property to the props
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        // projects: state.project.projects
        projects: state.firestore.ordered.projects, // since now firestore data has been synced with the firestore property of state due to firestoreconnect
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
// connect gives us the state.
export default  compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects',orderBy:['createdAt','desc']},// We need to tell firestore that we needed this collection sync with this compnent
        {collection : 'notifications', limit:3, orderBy:['time','desc']}
    ])
)(Dashboard)