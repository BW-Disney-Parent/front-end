import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Register = props => {
    const [form, setForm] = React.useState({ firstName: "", lastName: "", username: "", password: "" });

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
        <>
            <h1>Register Now!</h1>
            <form onSubmit={register}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChanges}
                    value={form.firstname}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChanges}
                    value={form.lastname}
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Create UserName"
                    onChange={handleChanges}
                    value={form.username}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    onChange={handleChanges}
                    value={form.password}
                    pattern="[^/s]{6,}"
                    title="Password must be at least 6 non-space characters"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Register; 