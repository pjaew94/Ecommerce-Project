import React, { useState } from "react";

import "../styles/Register.scss";

import registerSvg from "../../svgs/GirlSwing.svg";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    status: "",
  });

  const { name, email, password, password2, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match.");
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="admin_register">
      <div className="container">
        <div className="form_container">
          <div className="header">Register New Account</div>
          <form className="admin_form">
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

            <select value={status} onChange={(e) => onChange(e)}>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </select>
            <h3 className="warning">
              Please be sure to select "Student" if you are registering for a
              student
            </h3>
          </form>

          <div className='button_container'>
              <button>Submit</button>
          </div>
        </div>

        <div className="svg_container">
          <img src={registerSvg} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
