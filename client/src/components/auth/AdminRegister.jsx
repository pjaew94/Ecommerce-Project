import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import "../styles/Register.scss";

import registerSvg from "../../svgs/GirlSwing.svg";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    status: "Student",
  });

  const { name, email, password, password2, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match.");
    } else {
        console.log('Yuh')
    }
  };

  return (
    <div className="admin_register">
      <div className="container">
        <div className="form_container">
          <div className="header_container">
            <div className="header">Register New Account</div>
          </div>
          <form className="admin_form" onSubmit={e => onSubmit(e)}>
            <div className="inner">
              <div className="form_upper">
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="form_lower">
                <div className="form_group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>

              <div className="select_container">
                <select value={status} name='status' default='Student' onChange={(e) => onChange(e)}>
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>
                <h3 className="warning">
                  Please be sure to select "Student" if you are registering for
                  a student
                </h3>
              </div>
            </div>
            <input className='button' type='submit' value='Register' />
            <div className='redirect_login'>Already have an account? <Link className='small_link' to='/login'>Sign In</Link></div>
          </form>
        </div>

        <div className="svg_container">
          <img src={registerSvg} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
