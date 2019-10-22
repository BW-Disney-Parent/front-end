import axiosWithAuth from '../utils/axiosWithAuth.js';





export const ADD_PARENT = 'ADD_PARENT';
export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';

export const getParent = () => dispatch => {
    dispatch({ type: FETCHING_MESSAGE_START });


    axiosWithAuth
        .get('https://disney-parent-lambda.herokuapp.com/api')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.toString())
            dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: err.toString() })
        })
}



export const addParent = (newParent) => dispatch => {
    axiosWithAuth
    .post('https://disney-parent-lambda.herokuapp.com/api', newParent)
    .then(res => {
        console.log(res)
        dispatch({type:FETCHING_MESSAGE_SUCCESS, payload:res.data})
    })
    .catch(err=> {
        console.log(err.toString())
        dispatch({type: FETCHING_MESSAGE_FAILURE, payload:err.toString()})
    })
}