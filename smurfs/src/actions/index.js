import Axios from 'axios';

export const GET_SMURFS= "GET_SMURFS";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_ERROR = "SMURF_ERROR";

export const getSmurfs = () => dispatch => {

    dispatch({type: GET_SMURFS});
    Axios.get('http://localHost:3333/smurfs')
    .then(response => {
        dispatch({ type: SMURF_SUCCESS, payload: response.data})
    })
    .catch( error => {
        dispatch({ type: SMURF_ERROR, payload: error})
    });
};

