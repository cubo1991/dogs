import {FETCH_RAZAS, SEARCH_RAZAS, TEMPERAMENTS} from "../Actions"

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
            case SEARCH_RAZAS:
                return{
                    ...state,
                    razas: action.payload
                }
             case TEMPERAMENTS:
             return{
                ...state,
                temperamentos: action.payload
             }   
                  
    
        default: return state
           
    }
}