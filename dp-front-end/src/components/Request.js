import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
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

const Card = styled.div`
    border:2px solid #253b56;
    border-radius:25px;
    display:flex;
    display:inline-block;
    align-items:center;
    margin:15px;
    height:325px;
    width: 250px;
    padding:25px;
`
const Button = styled.button`
    display:flex;
    width:75px;
    height:25px;
    border-radius:10px;
    font-family:'Roboto Condensed';
    font-size:1rem;
    justify-content:center;
    display: inline-block;
    margin: 10px;
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

            <Button onClick={() => editRequest(request)} >Edit</Button>
            <Button onClick={() => deleteRequest(request)}>Delete</Button>

        </Card>
    )
}

export default Request;