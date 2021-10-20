import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css'
import google from '../../media/google.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignIn, setUser, error, setError, setLoading } = useAuth();
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location?.state?.from?.pathname || "/";

    const onSubmit = data => {
        const { email, password } = data;
        

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirectURL);
                const user = result.user;
                setUser(user)
                setError('');
            })
            .catch(error => {
            setError(error.message);
        })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user);
            history.push(redirectURL);

        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setLoading(false));
    }

    
    return (
        <Container className="login-container">
            <Row>
                <Col md={6} xs={0}></Col>
                <Col lg={6} xs={12}>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="form-container m-5">
                        <h2 className="login-title">Welcome!</h2>
                        <br />
                        <br />
                        <input className="login-input-field" type="email" id="floatingInput" placeholder="Email" {...register("email", { required: true })} />
                        <br />
                        <br />
                        <input className="login-input-field" type="password" id="floatingPassword" placeholder="Password" {...register("password", { required: true })} />
                        <br />
                        <p style={{ color: "red" }}>{error}</p>
                        <input type="submit" value="Login" className="login-btn my-5" />
                        <br />
                        <NavLink className="register" to="/register">Create Account</NavLink>
                        <br />
                        <br />
                        <button onClick={handleGoogleSignIn} className="google-login"><img src={google} alt="" width="35px"/><small>Google Login</small></button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;