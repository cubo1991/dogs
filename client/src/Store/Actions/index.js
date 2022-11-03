import axios from 'axios';
export const FETCH_RAZAS = "FETCH_RAZAS"
export const SEARCH_RAZAS = "SEARCH_RAZAS"
export const TEMPERAMENTS = "TEMPERAMENTS"
export const SORT_DOGS = "SORT_DOGS"

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
  return function(dispatch) {
    axios.get('http://localhost:3001/api/temperaments')
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




