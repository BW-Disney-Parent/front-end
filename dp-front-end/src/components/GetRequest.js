import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Request from './Request';
import { getParent } from './store/actions';

const GetRequest = props => {
    useEffect(() => {
        props.getParent();
    }, []);

    if (props.isFetching) {
        return <h2>Making your Request...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.getRequest.map(request => (
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