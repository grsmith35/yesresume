import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, CREATE_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'

export default function Login() {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN_USER)

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: {...formState}
            })
            
            Auth.login(data.login.token);
            console.log(data)
        } catch (e) {
            console.error(e)
        }   

        setFormState({
            email: "",
            password: ""
        })
    }

    const createUser = async (event) => {
        event.preventDefault();
        const {data} = await login({
            variables: {
                email: 'eric@youremploymentsolutions.com',
                password: 'Yes2022!'
            }
        });
        console.log(data)
    }

    const handleLoginInfoChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    return(
        <div className='container'>
            <div className='row'>
                <h2 className='col-md-6 mx-auto'>Resume Builder Admin Login</h2>
            </div>
            <form onSubmit={handleLogin} onChange={handleLoginInfoChange}>
                <div className='col-md-6 mx-auto loginbox'>
                    <div>
                        <label className='form-label' htmlFor='email'>E-mail:</label>
                        <input className='form-control form-control-lg' type='text' name='email' placeholder='E-mail' value={formState.email}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor='password'>Password:</label>
                        <input className='form-control form-control-lg' type='password' name='password' placeholder='Password' value={formState.password} />
                    </div>
                    <div className='mt-2'>
                        <button className='btn btn-primary' type='submit'>Login</button>
                    </div>
                    {error && <div>Login Failed</div>}
                </div>
            </form>
        </div>
    )
};