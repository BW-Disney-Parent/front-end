import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addParent, getParent } from './store/actions/index.js';

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
        <form onSubmit={submitForm} className='parentForm'>
            <label htmlFor='meeting place'>Meeting Place: </label>
            <input

                type='text'
                name='meetingPlace'
                placeholder='Where you would like to meet'
                value={parent.meetingPlace}
                onChange={changeHandler} />

            <label htmlFor='date time'>Date and Time: </label>
            <input
                type='text'
                name='dateTime'
                placeholder='YYYY-MM-DD HH:MM'
                value={parent.dateTime}
                onChange={changeHandler} />

            <label htmlFor='kids'>Number of Kids:</label>
            <input
                type='text'
                name='kids'
                placeholder='Number of Kids you Have'
                value={parent.kids}
                onChange={changeHandler}
            />

            <label htmlFor='description'>Post Your Request: </label>
            <input
                type='field'
                name='description'
                placeholder='Write What You Are Requesting Help For'
                value={parent.description}
                onChange={changeHandler} />

            <button type='submit'>Post Request</button>
        </form>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps, { addParent })(ParentForm);