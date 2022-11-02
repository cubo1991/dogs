import {FETCH_RAZAS} from "../Actions"

const initialState = {

    razas: [],
    temperamentos:[]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RAZAS:
            return{
                ...state,
                razas: action.payload

            }
                  
    
        default: return state
           
    }
}