import store from '../store'
import axios from 'axios'
import shortid from 'shortid'

export function getNewUser() {
    axios.get('https://randomuser.me/api').then(resp => {
        const data = resp.data.results[0]
        const id = shortid.generate()

        const user = {
            id: id,
            image: data.picture.large,
            fname: data.name.last,
            lname: data.name.last,
            phone: data.phone,
            email: data.mail
        }

        store.dispatch( {
            type: 'GET_NEW_USER',
            payload: user
        })
    })

}

export function going(id) {
    
    axios.post('/api/going', store.getState().new).then(resp => {
        
    })
}

export function notGoing(id) {

}
