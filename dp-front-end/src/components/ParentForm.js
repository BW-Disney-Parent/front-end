
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addParent, getParent } from './store/actions/index.js';
import styled from 'styled-components';

const Wrapper=styled.div`
    border:1px solid black;
    font-family:'Roboto Condensed';
    font-size:1.25rem;
    color:#253b56;
    background-color:#1994d7;
    height:300px;
`

const Input=styled.input`
    border:1px solid black;
    display:flex;
    display:block;
    margin-left:275px;
    margin-bottom:25px;
    width:150px;
`

const Button=styled.button`
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
        // axiosWithAuth()
        //     .post('https://disney-parent-lambda.herokuapp.com/api/requests/all', newParent)
        //     .then(res => {
        //         setParent(res.data);
        //         console.log(res.data);
        //     })
        //     .catch(err => console.log(err.res));
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



// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axiosWithAuth from '../components/store/utils/axiosWithAuth';

// const ParentForm = ({ errors, touched, status }) => {
//     console.log(ParentForm);
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         if (status) {
//             setUsers([...users, status]);
//         }
//     }, [status]);

//     return (
//         <div className="parent-form">
//             <Form>
//                 <Field type="text" name="meetingPlace" placeholder="Where you want to meet" />
//                 {touched.meetingPlace && errors.meetingPlace && <p className="error">{errors.meetingPlace}</p>}
//                 <Field type="text" name="dateTime" placeholder="YYYY-MM-DD HH:MM" />
//                 {touched.dateTime && errors.dateTime && <p className="error">{errors.dateTime}</p>}
//                 <Field type="text" name="kids" placeholder="Number of kids you have" />
//                 {touched.kids && errors.kids && <p className="error">{errors.kids}</p>}
//                 <Field type="text" name="description" placeholder="Write What You Are Requesting Help For" />
//                 {touched.description && errors.description && <p className="error">{errors.description}</p>}
//                 <button type="submit">Post Request</button>
//             </Form>
//         </div>
//     );
// };

// const FormikMyForm = withFormik({
//     mapPropsToValues({ meetingPlace, dateTime, kids, description }) {
//         return {
//             meetingPlace: meetingPlace || "",
//             dateTime: dateTime || "",
//             kids: kids || "",
//             description: description || ""
//         };
//     },
//     validationSchema: Yup.object().shape({
//         meetingPlace: Yup.string().required("Must input meeting place"),
//         dateTime: Yup.string().required("Must input a date and time"),
//         kids: Yup.string().required("Must input number of kids"),
//         description: Yup.string().required("Must input a request"),
//     }),
//     handleSubmit(values, { setStatus }) {
//         axiosWithAuth
//             .post("https://disney-parent-lambda.herokuapp.com/api/requests", values)
//             .then(res => {
//                 setStatus(res.data);
//                 console.log(res.data);
//             })
//             .catch(err => console.log(err.res));
//     }
// })(ParentForm);

// export default FormikMyForm;