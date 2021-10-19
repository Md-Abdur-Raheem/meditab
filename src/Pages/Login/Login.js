import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'
import logo from '../../media/logo-removebg.png';
import google from '../../media/google.png'
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignIn, setUser, error, setError } = useAuth();
    const auth = getAuth();

    const onSubmit = data => {
        console.log(data)
        const { email, password } = data;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                // history.push(redirectURL);
                const user = result.user;
                setUser(user)
                setError('');
            })
            .catch(error => {
            setError(error.message);
        })
    };
    return (
        <div className="login-container">
            <Container className="d-flex flex-column justify-content-center h-100">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <img className="logo mb-5" src={logo} alt="" />
                    <div className="login-form form-floating mb-3">
                        <input type="email" id="floatingInput" {...register("email", { required: true })}/>
                        <label className="label" htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="login-form form-floating">
                        <input type="password" id="floatingPassword" {...register("password", { required: true })}/>
                        <label className="label" htmlFor="floatingPassword">Password</label>
                    </div>
                    <p style={{color:"red"}}>{error}</p>
                    <input type="submit" value="Login" className="login-btn my-5" />
                    <br />
                    <NavLink className="register" to="/register">Create Account</NavLink>
                    <br />
                    <br />
                    <button onClick={googleSignIn} className="google-login"><img src={google} alt="" width="35px"/><small>Google Login</small></button>
                </form>
            </Container>
        </div>
    );
};

export default Login;