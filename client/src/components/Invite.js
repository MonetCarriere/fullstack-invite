import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {invite, clearInvite, getNumbers, markGoing, markNotGoing} from '../actions/invitation.actions'
import {useSelector} from 'react-redux'
import '../styles/App.css'


export default props => {
  const invited = useSelector(appState => appState.randomPerson)
  const going = useSelector(appState => appState.goingNum)
  const notgoing = useSelector(appState => appState.notGoingNum)
      
  
  useEffect(() => {
    invite()
    getNumbers()
  }, [])

  
  function handleGoing(e) {
  e.preventDefault()
  clearInvite()
  markGoing(invited)
  }

  
  function handleNotGoing(e) {
  e.preventDefault()
  clearInvite()
  markNotGoing(invited)
  }

  return (
    <div className='inviteContainer'>
      <div className='attendanceDiv'>
      <Link to='/going'><p>Going: {going} </p></Link>
      <Link to='/not-going'><p>Not Going: {notgoing}</p></Link>
      </div>
      {invited.map((person, i) => {
      return(
        <div key={i}>
        <div className='imgDiv'>
          <img src={person.picture.large} alt='user pic'></img>
        </div>
        <div className='contactDiv'>
          <p>Name: <span className='name'>{person.name.first} {person.name.last}</span></p>
          <p>Phone: <span>{person.cell}</span></p>
          <p>Email: <span>{person.email}</span></p>
        </div>
        <div className='buttonDiv'>
          <button className='decline' onClick={handleNotGoing}>x</button>
          <button className='accept' onClick={handleGoing}>✓</button>
        </div>
      </div>
      )
    })}
    </div>
  )
}
