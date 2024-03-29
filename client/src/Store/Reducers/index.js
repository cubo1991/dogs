import { NUMBER_PAGE, SHOW_DOGS, FETCH_RAZAS, FILTER_DOGSTEMPERAMENTS, SEARCH_RAZAS, SORT_DOGS, TEMPERAMENTS, FILTER_DOGS, PAG_DOGS, GET_DETAILS, DELETE_DOGS, POST_DOGS } from "../../constantes"

const initialState = {

    razas: [],
    temperamentos: [],
    dogsFiltered: [],
    cargando: true,
    currentPage: 1,
    dogsPag: [],
    dogDetail: [], 
    errorGlobalState: false,
    
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RAZAS:

            
           if(action.error) {return{ ...state,  dogsPag: action.error,  errorGlobalState: true  } }
            if(state.razas.length < 1) {
                return {
                    ...state,
                    razas: action.payload,
                    dogsFiltered: action.payload,
                    dogsPag: action.payload.slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
                    cargando: false,
                    
    
                }

            }
            else{ 
                return{
            ...state,
            
        }}
        case SEARCH_RAZAS:
     if (typeof action.payload[0] === "string")
     {
        return {
            ...state,
           
            dogsFiltered: action.payload,
            dogsPag: action.payload.slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
            currentPage: 1
        }
     }else{
            return {
                ...state,
               
                dogsFiltered: action.payload,
                dogsPag: action.payload.slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
                currentPage: 1
            }}
        case TEMPERAMENTS:
            return {
                ...state,
                temperamentos: action.payload
            }
        case SORT_DOGS:
            let sortDogs = [...state.dogsFiltered]
            
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
                if(action.payload === "") {return 0}    
                return 0;

            })
            return {
                ...state,               
                dogsFiltered: [...sortDogs],
                dogsPag:[...sortDogs].slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
                currentPage: 1
                
            }
         case FILTER_DOGSTEMPERAMENTS:
            let dogsTemps = [...state.razas]
            
            let filterDogsApiTemps = dogsTemps.filter(perro=> perro['temperamentos'][0].includes(action.payload) === true )
            let filterDogsBDTemps = dogsTemps.filter(perro=> perro['temperamentos'].includes(action.payload) === true )
            let filterTemps = [...filterDogsApiTemps, ...filterDogsBDTemps]
            if(action.payload === "removeFiltersT") {return {
                ...state,
                dogsFiltered: [...state.razas].slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
            }}
         return {
        ...state,
         dogsFiltered: [...filterTemps],
         dogsPag:[...filterTemps].slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
         currentPage: 1
         
        
         }   
         case FILTER_DOGS:
            let dogs = [...state.razas]
            let filter = []
            if(action.payload === "Api"){
            filter = dogs.filter(perro=> String(perro.ID).length < SHOW_DOGS)
            }
            if(action.payload === "DB"){
                filter = dogs.filter(perro => String(perro.ID).length > SHOW_DOGS  )
                }
            if(action.payload === "removeFilters"){ filter = state.razas}

         return {
        ...state,
        dogsFiltered: [...filter],
            currentPage: 1,
        dogsPag:[...filter].slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS)
        
         }   
         case PAG_DOGS:
            let aux = []
            if(state.cargando === true) { aux = state.razas}
            else {aux = state.dogsFiltered}
         


            return{
                ...state,              
                dogsPag: [...aux].slice((state.currentPage-1)*SHOW_DOGS,state.currentPage*SHOW_DOGS),
                currentPage: action.payload,
                
            }
            case GET_DETAILS:
           
            return{
                    ...state,
                    dogDetail: action.payload
                }
            case NUMBER_PAGE:
                return {
                    ...state,
                    currentPage: action.payload
                }   

            case DELETE_DOGS:
                
                
                return {
                    ...state,
                    dogsPag: action.payload,
                    razas: state.razas.filter(dog => dog.ID !== action.payloadId)
                }

             case POST_DOGS:
           
              state.razas.push(action.payload)
                return{
                    ...state,
                    dogsFiltered: [...state.razas]
                }       
           


        default: return state

    }
}