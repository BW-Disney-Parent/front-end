import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addParent } from './store/actions/index.js';

import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    border:1px solid black;
    font-family:'Roboto Condensed';
    font-size:1.25rem;
    color:#253b56;
    background-color:#1994d7;
    height:400px;
    width:100%;
`

const Input = styled.input`
    border:1px solid black;
    display:flex;
    display:block;
    margin-bottom:25px;
    width:250px;
`

const Button = styled.button`
    display:flex;
    width:150px;
    height:35px;
    border-radius:10px;
    font-family:'Roboto Condensed';
    font-size:1rem;
    justify-content:center;
`

const Header=styled.h3`
    display:flex;
    text-decoration:underline;
`


const ParentForm = props => {
    const [parent, setParent] = useState({ meetingPlace: '', dateTime: '', kids: '', description: '' });

    const changeHandler = e => {
        setParent({ ...parent, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log("currentRequest", props.currentRequest);
        setParent({ ...props.currentRequest })
    }, [props.currentRequest])

    const submitForm = e => {
        e.preventDefault();
        const newParent = {
            ...parent,
            requesterUserID: props.user.id
        };
        props.addParent(newParent);
        setParent({ meetingPlace: '', dateTime: '', kids: '', description: '' })
    };

    return (
        <Wrapper>
            <form onSubmit={submitForm} className='parentForm'>
                <Header>Please Fill Out This Form For Your Request: </Header>
                <label htmlFor='meeting place'>Meeting Place: </label>
                <Input

                    type='text'
                    name='meetingPlace'
                    placeholder='Where you would like to meet'
                    value={parent.meetingPlace}
                    onChange={changeHandler} />

                <label htmlFor='date time'>Date and Time: </label>
                <Input
                    type='text'
                    name='dateTime'
                    placeholder='YYYY-MM-DD HH:MM'
                    value={parent.dateTime}
                    onChange={changeHandler} />

                <label htmlFor='kids'>Number of Kids:</label>
                <Input
                    type='text'
                    name='kids'
                    placeholder='Number of Kids you Have'
                    value={parent.kids}
                    onChange={changeHandler}
                />

                <label htmlFor='description'>Post Your Request: </label>
                <Input
                    type='field'
                    name='description'
                    placeholder='Write What You Are Requesting Help For'
                    value={parent.description}
                    onChange={changeHandler} />





                <Button type='submit'>Post Request</Button>



            </form>


        </Wrapper>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.currentUser,
        currentRequest: state.currentRequest
    }
}


export default connect(mapStateToProps, { addParent })(ParentForm);

