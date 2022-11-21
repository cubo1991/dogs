import axios from 'axios';
import { NUMBER_PAGE, SEARCH_RAZAS, TEMPERAMENTS, SORT_DOGS, FILTER_DOGSTEMPERAMENTS, FILTER_DOGS, PAG_DOGS,  GET_DETAILS, FETCH_RAZAS, POST_DOGS, DELETE_DOGS} from '../../constantes'

export const fetchRazas = () => {
    return function (dispatch) {
        axios.get('http://localhost:3001/api/dogs/')
        .then((razas) =>{
            dispatch({
                type: FETCH_RAZAS,
                payload: razas.data}
            )
        }

        
    )
    .catch((error) => {
      dispatch({
        type: FETCH_RAZAS,
        error: [error],
        
      })
      console.log(error)
      
      
    })
  }


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
    .catch((error) => {
      dispatch({
        type: GET_DETAILS,
        payload: [error],
        
      })
      console.log(error)
    })
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
  
    .catch((error)=>{
      dispatch({
        type: SEARCH_RAZAS,
        payload: [error],
        
      })
      console.log(error)
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
    .catch((error) => {
       dispatch({
        type: TEMPERAMENTS,
        payload: [error],
        
      })
      console.log(error)
      
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


export const postDog = (payload) => {

  return function(dispatch) {
     axios.post('http://localhost:3001/api/dogs', {
      Name: payload.Name,
      Height_max: payload.Height_max,
      Height_min: payload.Height_min,
      Weight_max: payload.Weight_max,
      Weight_min: payload.Weight_min,
      Life_span: payload.Life_span,
      NameT: payload.temperamentos,
      Img: payload.Img
    }
   
    )
    axios.get('http://localhost:3001/api/dogs')
    .then((razas) =>
     dispatch({
      type: POST_DOGS,
      payload: razas.data[razas.data.length-1]
    }))       
    .catch((error) => {
     console.log(error)
      alert("Something went wrong...")
    })
   
  }
  
}

export const deleteDog = (id) => {

  return function(dispatch) {
     axios.delete('http://localhost:3001/api/dogs/' + id)
    
    .then((response) => {
      console.log(response)
          dispatch({
        type: DELETE_DOGS,
        payload: ["Dog erased successfully"],        
        payloadId:id
        
      })

    })
    .catch((error) => {
     console.log(error)
      alert("Something went wrong...")
    })
  }
}

