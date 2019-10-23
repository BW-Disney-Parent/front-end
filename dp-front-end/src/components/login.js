import React from 'react';

import axiosWithAuth from '../components/store/utils/axiosWithAuth';
import { Link } from 'react-router-dom';


const Login = props => {
    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://disney-parent-lambda.herokuapp.com/api/auth/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("Authorization", res.data.token);
                props.history.push("/parentform");
            })
            .catch(err => {
                console.log(err.response);
                setForm({ username: "", password: "" });
            });
    };

    return (
        <>
            <h1>Disney Parent</h1>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    placeholder="UserName"
                    onChange={handleChanges}
                    value={form.username}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChanges}
                    value={form.password}
                />
                <button type="submit">Log In</button>
            </form>
            <div>
                <p>Don't have an account? <Link to='/register-form'>Sign Up!</Link></p>
            </div>
        </>
    );
};

export default Login;