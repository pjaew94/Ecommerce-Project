import React, { useState } from 'react'

import '../styles/Register.scss'

const AdminRegister = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        status: '',
    })

    const { name, email, password, password2, status } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match.')
        } else {
            console.log(formData)
        }
    }

    return (
        <div className='admin_register'>
            
        </div>
    )
}

export default AdminRegister
