import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Request from './Request';
import { getParent } from './store/actions';
import axiosWithAuth from './store/utils/axiosWithAuth.js'

const GetRequest = props => {
    
const [requests, setRequests]=useState([1,2,3]);

    useEffect(() => {
        const random=   axiosWithAuth()
        .get('requests/all')
        .then(res => {
            console.log('hello from get parent', res);
            setRequests(res.data)
        })
        .catch(err => {
            console.log(err.toString())
        })
        console.log('props', props);
        console.log('random',random);
    }, []);

    if (props.isFetching) {
        return <h2>Making your Request...</h2>
    }
    console.log('Props in getrequest', props);
    console.log('request hook', requests)

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {requests.map(request => (
                <Request key={request.id} request={request} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getRequest: state.getRequest,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getParent }
)(GetRequest);