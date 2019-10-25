import React from 'react';
import styled from 'styled-components';

const Header=styled.h2`
    font-family:'Roboto Condensed';
    font-size:1.5rem;
    text-decoration:underline;
    color:#253b56;
    background-color:#1994d7;
    height:75px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:25px;
`

const Titles = styled.p`
    font-family:'Roboto Condensed';
    color:#253b56;
    font-size:1rem;
`

const Card=styled.div`
    border:2px solid #253b56;
    border-radius:25px;
    display:flex;
    display:inline-block;
    align-items:center;
    margin:15px;
    height:275px;
    width: 250px;
    padding:25px;
`



const Request = props => {
    console.log(props);
    const { editRequest, deleteRequest, request } = props;
    return (
        <Card className="request">
            <Header>Request For:</Header>
            <div className="request-items">
                <Titles>Where to Meet: {props.request.meetingPlace}</Titles>
                <Titles>Day and Time: {props.request.dateTime}</Titles>
                <Titles>Number of Kids: {props.request.kids}</Titles>
                <Titles>Description: {props.request.description}</Titles>
            </div>
            <button onClick={() => editRequest(request)} >Edit</button>
            <button onClick={() => deleteRequest(request)}>Delete</button>
        </div>

r
    )
}

export default Request;