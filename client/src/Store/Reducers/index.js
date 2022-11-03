import { FETCH_RAZAS, SEARCH_RAZAS, SORT_DOGS, TEMPERAMENTS } from "../Actions"

const initialState = {

    razas: [],
    temperamentos: [],
    dogsFiltered: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RAZAS:
            return {
                ...state,
                razas: action.payload,
                dogsFiltered: action.payload

            }
        case SEARCH_RAZAS:
            return {
                ...state,
                dogsFiltered: action.payload
            }
        case TEMPERAMENTS:
            return {
                ...state,
                temperamentos: action.payload
            }
        case SORT_DOGS:
            let sortDogs = [...state.razas]
            sortDogs.sort((a, b) => {
                if (action.payload === "ascendente" || action.payload === "descendente"){
                    if (a.Name.toUpperCase() > b.Name.toUpperCase()) {
                        if (action.payload === "ascendente") { return 1 } else { return -1 }
                    }

                if (a.Name.toUpperCase() < b.Name.toUpperCase()) {
                    if (action.payload === "ascendente") { return -1 } else { return 1 }

                }}
                if (action.payload === "ascendenteMax" || action.payload === "descendenteMax"){
                if (a.Weight_max > b.Weight_max) {
                    if (action.payload === "ascendenteMax") { return 1 } else { return -1 }
                }
                if (a.Weight_max < b.Weight_max) {
                    if (action.payload === "ascendenteMax") { return -1 } else { return 1 }
                }}
                if (action.payload === "ascendenteMin" || action.payload === "descendenteMin"){
                    if (a.Weight_min > b.Weight_min) {
                        if (action.payload === "ascendenteMin") { return 1 } else { return -1 }
                    }
                    if (a.Weight_min < b.Weight_min) {
                        if (action.payload === "ascendenteMin") { return -1 } else { return 1 }
                    }}

                return 0;

            })
            return {
                ...state,
                dogsFiltered: [...sortDogs]
            }



        default: return state

    }
}