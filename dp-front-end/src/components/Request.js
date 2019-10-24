import React from 'react';
// import styled from 'styled-components';



const Request = props => {
    console.log(props);
    const { editRequest, deleteRequest, request } = props;
    return (
        <div className="request">
            <h2>Request For:</h2>
            <div className="request-items">
                <p>Where to Meet: {props.request.meetingPlace}</p>
                <p>Day and Time: {props.request.dateTime}</p>
                <p>Number of Kids: {props.request.kids}</p>
                <p>Description: {props.request.description}</p>
            </div>
            <button onClick={() => editRequest(request)} >Edit</button>
            <button onClick={() => deleteRequest(request)}>Delete</button>
        </div>
    )
}

export default Request;