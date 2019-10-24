import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_PARENT = 'ADD_PARENT';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCESS';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = (form) => dispatch => {
    dispatch({ type: LOGIN_USER_START })

    axiosWithAuth()
        .post("https://disney-parent-lambda.herokuapp.com/api/auth/login", form)
        .then(res => {
            console.log(res);
            localStorage.setItem("Authorization", res.data.token);
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.user })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: LOGIN_USER_FAILURE, payload: err })
        });
}

export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';

export const getParent = () => dispatch => {
    dispatch({ type: FETCHING_MESSAGE_START });

    console.log('inside get parent action')
     axiosWithAuth()
        .get('requests/all')
        .then(res => {
            console.log('hello from get parent', res);
            dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.toString())
            dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: err.toString() })
        })
}



export const addParent = (newParent) => dispatch => {
    console.log(newParent);
    axiosWithAuth()
        .post('requests', newParent)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.toString())
            dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: err.toString() })
        })
}