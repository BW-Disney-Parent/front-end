import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './store/actions/index.js';
import { Link } from 'react-router-dom';


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

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { loginUser })(Login);