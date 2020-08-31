import React from 'react'
import moment from 'moment'

const ProjectSummary =({project})=>{
    return(
        <div className=" mb-3 card project-summary">
             <span className="card-header">
             <h4>{project.title}</h4>
             </span>
             <span className="pl-3 card-text ">Posted by {project.authorFirstName} {project.authorLastName} </span>
             <span className="pl-3 card-text float-right">{moment(project.createdAt.toDate()).calendar()}</span>
          </div>
    )
}

export default ProjectSummary