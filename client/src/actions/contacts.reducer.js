const initialState = {
    current: {},
    going: [],
    notgoing: []
} 

    export default function(state = initialState, action) {
        switch (action.type) {
            case 'GET_CURRENT':
                return
            default:
                return state
        }
    }

