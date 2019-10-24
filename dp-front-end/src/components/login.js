import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './store/actions/index.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Wrapper=styled.div`
    border:1px solid black;
    font-family:'Roboto Condensed';
    font-size:1.65rem;
    color:#253b56;
    background-color:#1994d7;
    height: 350px; 
`
const Inputs=styled.input`
    display:flex;
    display:block;
    margin-left:295px;
    margin-bottom:25px;
`
const Button=styled.button`
    width:25%;
    height:25px;
    border-radius:10px;
    font-family:'Roboto Condensed';
    font-size:1rem;
`



const Login = props => {
    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        props.loginUser(form);
        setForm({ username: "", password: "" });
        props.history.push("/parent-form");
    };

    return (
        <Wrapper>
            <h1>Disney Parent</h1>
            <form onSubmit={login}>
                <Inputs
                    type="text"
                    name="username"
                    placeholder="UserName"
                    onChange={handleChanges}
                    value={form.username}
                />
                <Inputs
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChanges}
                    value={form.password}
                />
                <Button type="submit">Log In</Button>
            </form>
            <div>
                <p>Don't have an account? <Link to='/register-form'>Sign Up!</Link></p>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { loginUser })(Login);