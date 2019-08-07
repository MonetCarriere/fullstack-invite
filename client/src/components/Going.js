import React, {useEffect} from 'react' 
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { going } from '../actions/invitation.actions'
import '../styles/App.css'


export default props => {
const attending = useSelector(appState => appState.going)

useEffect(() => {
going()
})

  return (
    <div className='invitation'>
      <Link to='/'><p>Back</p></Link>
      {attending.map((person, i) => {
        return (
	    <div key={i} className='goingContainer'>
          <div>
            <div className='imgDiv'>
              <img src={person.picture.large} alt='user pic'></img>
            </div>
            <div className='contactDiv'>
              <p>Name: <span className='name'>{person.name.first} {person.name.last}</span></p>
              <p>Phone: <span>{person.phone}</span></p>
              <p>Email: <span>{person.email}</span></p>
            </div>
          </div>
        </div>
	    )})}
    </div>
  )
}