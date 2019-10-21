import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addParent, getParent } from './store/actions/index.js';

const ParentForm = props =>{
    const [parent, setParent]=useState({firstname:'', lastname:'', request:''});

    const changeHandler = e =>{
        setParent({...parent, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        getParent();
    },[])

    const submitForm = e =>{
        e.preventDefault();
        const newParent = {
            ...parent,
            id:Date.now()
        };
        props.addParent(newParent);
        setParent({firstname:'', lastname:'', request:''})
    };

    return (
        <form onSubmit={submitForm} className='parentForm'>
            <label htmlFor='first name'>First Name: </label>
            <input
            type='text'
            name='firstname'
            placeholder='Your First Name'
            value={parent.firstname}
            onChange={changeHandler}/>

            <label htmlFor='last name'>Last Name: </label>
            <input
            type='text'
            name='lastname'
            placeholder='Your Last Name'
            value={parent.lastname}
            onchange={changeHandler}/>

            <label htmlFor='request'>Post Your Request: </label>
            <input
            type='field'
            name='request'
            placeholder='Write What You Are Requesting Help For'
            value={parent.request}
            onChange={changeHandler}/>

            <button type='submit'>Post Request</button>


        </form>
    );
};

const mapStateToProps = state =>{
    return {

    }
}

export default connect(mapStateToProps, {addParent})(ParentForm);