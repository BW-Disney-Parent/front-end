import React from 'react';
import axiosWithAuth from '../components/store/utils/axiosWithAuth';
import styled from 'styled-components';


const Wrapper=styled.div`
    border:1px solid black;
    font-family:'Roboto Condensed';
    font-size:1.65rem;
    color:#253b56;
    background-color:#1994d7;
    height:550px;
`

const Input=styled.input`
    border:1px solid black;
    display:flex;
    display:block;
    margin-left:275px;
    margin-bottom:25px;
    width:150px;
    height:25px;
`

const Button=styled.button`
    width:25%;
    height:25px;
    border-radius:10px;
    font-family:'Roboto Condensed';
    font-size:1rem;
`

const Register = props => {
    const [form, setForm] = React.useState({ firstName:"", lastName:"", username:"", password:"" });
    // const [radio, setRadio]= useState();

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const register = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://disney-parent-lambda.herokuapp.com/api/auth/register", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(err => {
                console.log(err.response);
                setForm({ firstName: "", lastName: "", username: "", password: "" });
            });
    };

   

    

    return (
        <Wrapper>
            <h1>Register Now!</h1>
            <form onSubmit={register}>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChanges}
                    value={form.firstname}
                    required
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChanges}
                    value={form.lastname}
                    required
                />
                <Input
                    type="text"
                    name="username"
                    placeholder="Create UserName"
                    onChange={handleChanges}
                    value={form.username}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    onChange={handleChanges}
                    value={form.password}
                    pattern="[^/s]{6,}"
                    title="Password must be at least 6 non-space characters"
                    required
                />
                <div>
                    <p>I am a :</p>
                    <label> Parent
                    <input
                    type='radio'
                    value='parent'
                    
                    />
                    </label>

                    <label>Volunteer/Business Owner
                    <input
                    type='radio'
                    value='vb'
                    
                    />
                    </label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Wrapper>
    );
};

export default Register;

