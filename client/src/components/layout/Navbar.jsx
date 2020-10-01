import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { IconContext } from "react-icons";
import { CgShapeHexagon } from "react-icons/cg";
import { AiOutlineUser, AiOutlineBuild, AiOutlineSolution, AiOutlineLogout } from "react-icons/ai";

import "../styles/Navbar.scss";
import courage from "../../svgs/courage.jpg";

const Navbar = ({ logout, auth: { isAuthenticated, loading, user } }) => {

  const [showLogout, setShowLogout] = useState(false);

  return (
    <Fragment>
      {!loading & isAuthenticated ? (
        <nav className="navbar">
          <div className="navbar_logo">
            <IconContext.Provider value={{ className: "hexagon" }}>
              <CgShapeHexagon />
            </IconContext.Provider>{" "}
            <span>JLC Studies</span>
          </div>

          <ul>
            <li>
              <Link className="link" to="/profile">
                <IconContext.Provider value={{ className: "icon" }}>
                  <AiOutlineUser />
                </IconContext.Provider>
                Profile
              </Link>
            </li>
            <li>
              <Link className="link" to="/dashboard">
                <IconContext.Provider value={{ className: "icon" }}>
                  <AiOutlineBuild />
                </IconContext.Provider>
                Courses
              </Link>
            </li>
            <li>
              <Link className="link" to="/teachers">
                <IconContext.Provider value={{ className: "icon" }}>
                  <AiOutlineSolution />
                </IconContext.Provider>
                Teachers
              </Link>
            </li>
            {!loading && user !== null && user.status === "Admin" ? (
              <li>
                <Link className="link" to="/register">
                  Register New
                </Link>
              </li>
            ) : null}
          </ul>

          <div className="user" onMouseEnter={() => setShowLogout(!showLogout)} onMouseLeave={() => setShowLogout(!showLogout)}>
            <div className={showLogout ? "show_logout" : "hide_logout"}>
              <a className="link" href="/" onClick={logout}>
                Log Out
                <IconContext.Provider value={{ className: "icon" }}>
                  <AiOutlineLogout />
                </IconContext.Provider>
              </a>
            </div>
            <div className="user_block">
              <img src={courage} alt="profile picture"></img>
              <div className="user_info">
                {user.name}
                <span>{user.status}</span>
              </div>
            </div>
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
