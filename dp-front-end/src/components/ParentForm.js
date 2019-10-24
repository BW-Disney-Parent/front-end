import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addParent, getParent } from './store/actions/index.js';

import styled from 'styled-components';

const Wrapper = styled.div`
    border:1px solid black;
    font-family:'Roboto Condensed';
    font-size:1.25rem;
    color:#253b56;
    background-color:#1994d7;
    height:300px;
`

const Input = styled.input`
    border:1px solid black;
    display:flex;
    display:block;
    margin-left:275px;
    margin-bottom:25px;
    width:150px;
`

const Button = styled.button`
    width:25%;
    height:25px;
    border-radius:10px;
    font-family:'Roboto Condensed';
    font-size:1rem;
`


const ParentForm = props => {
    const [parent, setParent] = useState({ meetingPlace: '', dateTime: '', kids: '', description: '' });

    const changeHandler = e => {
        setParent({ ...parent, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getParent();
    }, [])

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
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { addParent })(ParentForm);