import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Register.css'
import useAuth from '../../hooks/useAuth/useAuth';
import google from '../../media/google.png';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useLocation, useHistory } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignIn, setUser, error, setError, setLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectURL = location?.state?.from?.pathname || "/";


    const onSubmit = data => {
        const auth = getAuth();
        const { name, email, password, rePassword } = data;

        if (password !== rePassword) {
            setError("Password doesn't match");
            return;
        }
        else {
            setError('');

            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setUserName();
                history.push(redirectURL);
            })
            .catch((error) => {
                setError(error.message)
            });
        }

        const setUserName = () => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(() => {
                    
                })
                .catch((error) => {
                    setError(error.message);
              });
        }
    }

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
                    <h2 className="login-title">Join Us!</h2>
                    <br />
                    <br />
                    <input className="login-input-field" type="text" id="floatingInput" placeholder="Full Name" {...register("name", { required: true })} />
                    <br />
                    <br />    
                    <input className="login-input-field" type="email" id="floatingInput" placeholder="Email" {...register("email", { required: true })} />
                    <br />
                    <br />
                    <input className="login-input-field" type="password" id="floatingPassword" placeholder="Password" {...register("password", { required: true })} />
                    <br />
                    <br />
                    <input  className="login-input-field" type="password" id="floatingPassword2" placeholder="Re enter your password" {...register("rePassword", { required: true })} />
                    <br />
                    <p style={{ color: "red" }}>{error}</p>
                    <input type="submit" value="Register" className="login-btn my-5" />
                    <br />
                    
                    <br />
                    <br />
                    <button onClick={handleGoogleSignIn} className="google-login"><img src={google} alt="" width="35px"/><small>Google Sign up</small></button>
                </form>
            </Col>
        </Row>
    </Container>
    );
};

export default Register;