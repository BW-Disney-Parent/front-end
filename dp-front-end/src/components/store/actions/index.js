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
            console.log('res after login', res);
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

export const getParent = (newParent) => dispatch => {
    dispatch({ type: FETCHING_MESSAGE_START });
    console.log('res from the getParent action', newParent);
    axiosWithAuth()
        .get('https://disney-parent-lambda.herokuapp.com/api/requests/all', newParent)
        .then(res => {

            console.log('res after request submit', res);
            dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: res.data.user })

        })
        .catch(err => {
            console.log(err.toString())
            dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: err.toString() })
        })
}



export const addParent = (newParent) => dispatch => {
    console.log('this is newParent', newParent);
    axiosWithAuth()
        .post('https://disney-parent-lambda.herokuapp.com/api/requests', newParent)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: res.data.user })
        })
        .catch(err => {
            console.log(err.toString());
            dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: err.toString() })
        })
}

export const EDIT_SUCCESS = 'EDIT_SUCCESS';

export const editRequest = (request) => dispatch => {
    console.log("test edit");
    dispatch({ type: EDIT_SUCCESS, payload: request })
}

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const updateRequest = (updatedData) => dispatch => {
    dispatch({ type: UPDATE_START });
    axiosWithAuth()
        .put('https://disney-parent-lambda.herokuapp.com/api/users/1', updatedData)
        .then(res => {
            dispatch({ type: UPDATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: UPDATE_FAILURE, payload: err })
        })
}

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteRequest = () => dispatch => {
    console.log('test delete');
    axiosWithAuth()
        .delete('https://disney-parent-lambda.herokuapp.com/api/users/1')
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data.user })
        })
        .catch(err => {
            dispatch({ type: DELETE_FAILURE, payload: err })
        })
}