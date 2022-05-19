import React, { useState } from 'react'
import {auth, firestore} from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { useGlobalContext } from '../context';

const Register = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const {showAlert} = useGlobalContext();

    // Function to Register user
    const registerUser = (e)=>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
            console.log(userCred.user);
            showAlert('success','User has been registered!');
            setEmail('');
            setPassword('');

        }).catch((error)=>{
            showAlert('error',error.message);
        })


    }

    // Function to login user
    const loginUser = (e)=>{
        e.preventDefault();

    }

    // Function to logout user
    const logoutUser = (e)=>{
        e.preventDefault();
        signOut(auth)
        .then(()=>{
            showAlert('success','Logout Successfully!');
        }).catch((error)=>{
            showAlert('error',error.message);
        })
    }

    // Function to verify email
    const emailVerificationButton = ()=>{

    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column min-vh-100'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className='text-center text-white'>Current User: </h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Register User</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <form onSubmit={registerUser}>
                            <div className="row">
                                <div className="col">
                                    <input value={email} type="email" placeholder='Email' name='email' className='form-control' onChange={e => { setEmail(e.target.value) }} />
                                </div>
                                <div className="col">
                                    <input value={password} type="password" placeholder='Password' name='password' className='form-control' onChange={e => { setPassword(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <button className='btn btn-success'>Register</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="border border-bottom border-1 my-5 w-100"></div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Login User</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <form onSubmit={loginUser}>
                            <div className="row">
                                <div className="col">
                                    <input value={loginEmail} type="email" placeholder='Email' name='email' className='form-control' onChange={e => { setLoginEmail(e.target.value) }} />
                                </div>
                                <div className="col">
                                    <input value={loginPassword} type="password" placeholder='Password' name='password' className='form-control' onChange={e => { setLoginPassword(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <button className='btn btn-success'>Login</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="border border-bottom border-1 my-5 w-100"></div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Logout User</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="row mt-3">
                            <div className="col text-center">
                                <button className='btn btn-success' onClick={logoutUser}>Logout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border border-bottom border-1 my-5 w-100"></div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Send Email Verification Link</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="row mt-3">
                            <div className="col text-center">
                                <button className='btn btn-success' onClick={emailVerificationButton}>Email Verification</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
  )
}

export default Register