import React from 'react'
import moment from 'moment'

const Notifications = (props)=>{
    const {notifications} = props
    return(
        <div className="card ">
            <div className="card-header"><strong>Notifications</strong></div>
            <div className="card-body">
                <ul className="list-group">
                    {notifications && notifications.map(noti =>{
                        return(
                            <li className="list-group-item" key={noti.id}>
                                <span className="text-primary">{noti.user}</span>
                                <span> {noti.content}</span>
                                <div className="text-muted">{moment(noti.time.toDate()).fromNow()}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Notifications