import axios from 'axios';
import {NUMBER_PAGE, SEARCH_RAZAS, TEMPERAMENTS, SORT_DOGS, FILTER_DOGSTEMPERAMENTS, FILTER_DOGS, PAG_DOGS,  GET_DETAILS, FETCH_RAZAS} from '../../constantes'

export const fetchRazas = () => {
    return function (dispatch) {
        axios.get('http://localhost:3001/api/dogs/')
        .then((razas) =>{
            dispatch({
                type: FETCH_RAZAS,
                payload: razas.data}
            )
        }

        
    )}


}

export const getDetails = (id) => {
  return function (dispatch) {
    axios.get('http://localhost:3001/api/dogs/' + id)
    .then((raza) => {
      dispatch({
        type: GET_DETAILS,
        payload: raza.data
      })
    }
    )
  }
}

export const searchRaza = (dog) => {
  return function(dispatch) {
    axios.get('http://localhost:3001/api/dogs?name=' + dog)
    .then((razas) => {
      dispatch({
        type: SEARCH_RAZAS,
        payload: razas.data
      })
    })
    .catch((err)=>{
      dispatch({
        type: SEARCH_RAZAS,
        payload: err
      })
    })
  }
}

export const getTemperaments = () => {
  return async function(dispatch) {
    await axios.get('http://localhost:3001/api/temperaments')
    .then((temperaments) => {
      dispatch({
        type: TEMPERAMENTS,
        payload: temperaments.data
      })
    })
  }

 

}

export const sortDogs = (order) => {
  
  return{type: SORT_DOGS, payload:order}

}

export const filterDogsTemperaments = (filtro) =>{
return {type: FILTER_DOGSTEMPERAMENTS, payload:filtro}
}
export const filterDogs = (filtro) =>{
  return {type: FILTER_DOGS, payload:filtro}
  }

  export const paginationDogs = (payload) => {
    return {type: PAG_DOGS, payload}
  }
export const numberPage = (payload) => {
  return {type: NUMBER_PAGE, payload} 
}
