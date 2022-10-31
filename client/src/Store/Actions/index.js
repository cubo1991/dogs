import axios from 'axios';
export const FETCH_RAZAS = "FETCH_RAZAS"

export const fetchRazas = () => {
    return function (dispatch) {
        axios.get('http://localhost:3001/dogs/')
        .then((razas) =>{
            dispatch({
                type: FETCH_RAZAS,
                payload: razas}
            )
        }

        
    )}


}

