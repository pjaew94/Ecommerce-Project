import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register, loadUser } from "../../actions/auth";
import PropTypes from "prop-types";

import "../styles/Register.scss";

import registerSvg from "../../svgs/GirlSwing.svg";

const AdminRegister = ({ setAlert, register, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    status: "Student",
    studentSubjects: "",
    instructorSubjects: ""
  });

  const { name, email, password, password2, status, studentSubjects, instructorSubjects } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Please make sure your passwords are matching.", "danger");
    } else {
      register({ name, email, password, status });
    }
  };


  const studentSubjectsSelector = (
    <div className="subjects_container">
      <select
        value={studentSubjects}
        name="studentSubjects"
        default="Choose Your Subjects"
        onChange={(e) => onChange(e)}
      >
        <option value="sat">SAT Classes</option>
        <option value="pbC">PreAlg & Book Club</option>
        <option value="abC">Algebra & Book Club</option>
      </select>
    </div>
  );

  const instructorSubjectsSelector = (
    <div className="subjects_container">
      <select
        value={instructorSubjects}
        name="instructorSubjects"
        default="Choose Instructors Subjects"
        onChange={(e) => onChange(e)}
      >
        <option value="math">Math</option>
        <option value="bookClub">Book Club</option>
        <option value="english">SAT English</option>
      </select>
    </div>
  );

  return (
    <div className="admin_register">
      <div className="container">
        <div className="form_container">
          <div className="header_container">
            <div className="header">Register New Account</div>
          </div>
          <form className="admin_form" onSubmit={(e) => onSubmit(e)}>
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
                <select
                  value={status}
                  name="status"
                  default="Student"
                  onChange={(e) => onChange(e)}
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>
                <h3 className="warning">
                  Please be sure to select "Student" if you are registering for
                  a student
                </h3>
              </div>
              {formData.status === "Student" && studentSubjectsSelector}
              {formData.status === "Instructor" && instructorSubjectsSelector}
            </div>
            <input
              className="button"
              type="submit"
              value="Register"
            />
            <div className="redirect_login">
              Already have an account?{" "}
              <Link className="small_link" to="/login">
                Sign In
              </Link>
            </div>
          </form>
        </div>

        <div className="svg_container">
          <img src={registerSvg} alt=""></img>
        </div>
      </div>
    </div>
  );
};

AdminRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { setAlert, register, loadUser })(
  AdminRegister
);
