import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { login } from '../../actions/auth';

import '../styles/Login.scss'

const Login = () => {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // });

    // const { email, password } = formData;
   
    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = async e => {
    //     e.preventDefault();
    //     login(email, password)
    // }

    // if(isAuthenticated) {
    //     return <Redirect to='/dashboard' />
    // }


    return (
        <div className='login'>
            login
        </div>
    )
}

export default Login