import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {getCurrent} from '../actions/contacts.actions'

export default props => {
    const user = userSelector(appState => appState.State.current)


    useEffect(() => {
        getCurrent ()
    }, [])


return (
    <div className="current-user">
        <img src={user.image}/>
        <p><b>Name:</b>{user.fname} {user.lname}</p>
        <p><b>Phone:</b>{user.phone}</p>
        <p><b>Email:</b>{user.email}</p>
        <button onClick={setGoing}>Going</button>
        <button onClick={setnotGoing}>Not Going</button>
    </div>
)

}