import React from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { CgShapeHexagon } from "react-icons/cg";

import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_content_wrapper">
        <div className="navbar_logo">
          <IconContext.Provider value={{ className: "hexagon" }}>
            <CgShapeHexagon />
          </IconContext.Provider>{" "}
          <span>JLC Studies</span>
        </div>
        <ul>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/login'>Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
