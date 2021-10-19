import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Register.css'
import useAuth from '../../hooks/useAuth/useAuth';
import logo from '../../media/logo-removebg.png';
import google from '../../media/google.png';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useLocation, useHistory } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignIn, setUser, error, setError, setLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectURL = location?.state?.from?.pathname || "/";
    console.log(redirectURL);


    const onSubmit = data => {
        console.log(data);
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
            console.log(result.user);
            setUser(result.user);
            history.push(redirectURL);

        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setLoading(false));
    }

    return (
        <div className="register-container">
            <Container className="d-flex flex-column justify-content-center h-100">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <img className="logo mb-5" src={logo} alt="" />
                    <div className="login-form form-floating mb-3">
                        <input type="text" id="floatingInput" {...register("name", { required: true })}/>
                        <label className="label" htmlFor="floatingInput">Full name</label>
                    </div>
                    <div className="login-form form-floating mb-3">
                        <input type="email" id="floatingInput2" {...register("email", { required: true })}/>
                        <label className="label" htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="login-form form-floating mb-3">
                        <input type="password" id="floatingPassword" {...register("password", { required: true })}/>
                        <label className="label" htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="login-form form-floating ">
                        <input type="password" id="floatingPassword2" className="mt-2" {...register("rePassword", { required: true })}/>
                        <label className="label" htmlFor="floatingPassword">Re enter <br /> password</label>
                    </div>
                    <p style={{color:"red"}}>{error}</p>
                    <input type="submit" value="Register" className="login-btn my-5" />
                    <br />
                    <br />
                    <button onClick={handleGoogleSignIn} className="google-login"><img src={google} alt="" width="35px"/><small>Google Signup</small></button>
                </form>
            </Container>
        </div>
    );
};

export default Register;