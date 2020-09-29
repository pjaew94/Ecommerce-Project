import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { IconContext } from "react-icons";
import { CgShapeHexagon } from "react-icons/cg";

import "../styles/Navbar.scss";

const Navbar = ({ logout, auth: { isAuthenticated, loading, user } }) => {
  return (
    <Fragment>
      {!loading & isAuthenticated ? (
        <nav className="navbar">
          <div className="navbar_content_wrapper">
            <div className="navbar_logo">
              <IconContext.Provider value={{ className: "hexagon" }}>
                <CgShapeHexagon />
              </IconContext.Provider>{" "}
              <span>JLC Studies</span>
            </div>
            <ul>
              {!loading && user !== null && user.status === "Admin" ? (
                <li>
                  <Link className="link" to="/register">
                    Register New
                  </Link>
                </li>
              ) : null}
              <li>
                <Link className="link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <a className="link" href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
