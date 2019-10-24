import React, {useState, useEffect} from 'react';
import axiosWithAuth from './store/utils/axiosWithAuth.js';

const UserRequest = props => {
    const [userRequests, setUserRequests]= useState([]);

        useEffect(()=>{
            const awa= axiosWithAuth()
            .get('/requests/all')
            .then(res=>{
                console.log('UserRequest response', res)
                setUserRequests(res.data)
            })
            .catch(err=>{
                console.log(err.toString())
            })
            console.log('data received in User request useEffect hook', props, random)
        }, [])

        
}