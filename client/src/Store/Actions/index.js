import axios from 'axios';
export const FETCH_RAZAS = "FETCH_RAZAS"

// export const fetchRazas = () => {
//     return function (dispatch) {
//         axios.get('http://localhost:3001/api/dogs/')
//         .then((razas) =>{
//             dispatch({
//                 type: FETCH_RAZAS,
//                 payload: razas}
//             )
//         }

        
//     )}


// }

export const fetchRazas = () => dispatch => {
    return fetch("http://localhost:3001/api/dogs")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: FETCH_RAZAS, payload: res });
      });
  };

