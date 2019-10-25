import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from './store/utils/axiosWithAuth.js';
import GetRequest from './GetRequest.js';
import Request from './Request';

import { getParent, editRequest } from './store/actions';


const UserRequest = props => {
    const [userRequests, setUserRequests] = useState([]);


    useEffect(() => {
        axiosWithAuth()
            .get('/requests/all')
            .then(res => {
                console.log('UserRequest response', res)
                const { data } = res;

                const requests = data.filter(requestObj =>
                    requestObj.requesterUserID === props.user.id && true
                )
                setUserRequests(requests)
            })
            .catch(err => {
                console.log(err.toString())
            })
        console.log('data received in User request useEffect hook', props)
    }, [props.user])


    if (props.isFetching) {
        return <h2>Fetching...</h2>
    }
    console.log('props in UserRequest', props);

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {userRequests.map(request => (
                <Request key={request.id} request={request} editRequest={props.editRequest} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("current user mst", state.currentUser);
    return {
        getRequest: state.request,
        user: state.currentUser
    }
}


export default connect(mapStateToProps, { getParent, editRequest })(UserRequest);


