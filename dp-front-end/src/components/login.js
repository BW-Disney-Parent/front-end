import React from 'react';

import { Link } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth.js';


const Login = props => {
    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", form)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
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
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChanges}
                    value={form.password}
                    pattern="[^/s]{6,}"
                    title="Password must be at least 6 non-space characters"
                    required
                />
                <button type="submit">Log In</button>
            </form>
            <div>
                <p>Don't have an account yet? <Link to='/register-form'>Sign Up!</Link></p>
            </div>
        </>
    );
};

export default Login;