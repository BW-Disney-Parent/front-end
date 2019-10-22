import React from 'react';

const Request = props => {
    console.log(props);
    return (
        <div className="request">
            <h2>Request For:</h2>
            <div className="request-items">
                <p>Where to Meet: {props.request.meetingPlace}</p>
                <p>Day and Time: {props.request.dateTime}</p>
                <p>Number of Kids: {props.request.kids}</p>
                <p>Description: {props.request.description}</p>
            </div>
        </div>
    )
}

export default Request;