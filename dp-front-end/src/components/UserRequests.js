import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from './store/utils/axiosWithAuth.js';
import GetRequest from './GetRequest.js';
import Request from './Request';
import { getParent } from './store/actions';

const UserRequest = props => {
    const [userRequests, setUserRequests] = useState([]);


    useEffect(() => {
        const awa = axiosWithAuth()
            .get('/requests/all', { "filter": { "requesterUserID": 1 } })
            .then(res => {

                console.log('UserRequest response', res)
                setUserRequests(res.data)
            })
            .catch(err => {
                console.log(err.toString())
            })
        console.log('data received in User request useEffect hook', props)
    }, [])


    if (props.isFetching) {
        return <h2>Fetching...</h2>
    }
    console.log('props in UserRequest', props);

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {userRequests.map(request => (
                <Request key={request.id} request={request} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getRequest: state.request
    }
}

export default connect(mapStateToProps, { getParent })(GetRequest);

