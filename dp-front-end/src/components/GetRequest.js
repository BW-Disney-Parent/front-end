import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Request from './Request';
import { getParent } from './store/actions';

const GetRequest = ({ getParent, getRequest }) => {
    useEffect(() => {
        getParent();
    }, [getParent]);
    console.log('my getRequest info', getRequest);

    return (
        <div className='requestCard'>
            {getRequest.map(request => {
                return (
                    <Request key={request.id} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getRequest: state.request
    }
}

export default connect(
    mapStateToProps,
    { getParent }
)(GetRequest);