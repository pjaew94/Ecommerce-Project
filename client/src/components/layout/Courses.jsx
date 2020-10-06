import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllSubjects } from "../../actions/subjects";

import { BiBookHeart, BiBookContent, BiCalculator } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";

import "../styles/Courses.scss";

const Courses = ({
  getAllSubjects,
  auth: { user },
  subjects: { subjects, loading },
}) => {
  useEffect(() => {
    getAllSubjects(user);
  }, []);

  // Create new array of subjects to display
  let coursesSubjects = [];

  if (subjects && !loading && user) {
    coursesSubjects = subjects.filter(function (e) {
      if (user.status === "Admin" || user.status === "Instructor") {
        return e.instructorSubjects === user.instructorSubjects;
      } else {
        return e.studentSubjects === user.studentSubjects;
      }
    });
  }

  const getIcon = (subject) => {
    if (subject === "bookClub") {
      return <BiBookHeart />;
    } else if (subject === "english") {
      return <BiBookContent />;
    } else if (subject === "math") {
      return <BiCalculator />;
    }
  };

  return loading && subjects === null ? (
    <Spinner />
  ) : (
    <div className="courses">
      <div className="inner">
        {coursesSubjects &&
          coursesSubjects.map((s) => {
            return (
              <div className="course_card" key={s._id}>
                <div className="icon_button_container">
                  <div className={`icon_container ${s.instructorSubjects}`}>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {getIcon(s.instructorSubjects)}
                    </IconContext.Provider>
                  </div>

                  <Link
                    className={`course_button button_${s.instructorSubjects}`}
                    to={`/${s.route}`}
                  >
                     <IconContext.Provider value={{ className: "icon" }}>
                    <BsArrowRight />
                    </IconContext.Provider>
                  </Link>
                </div>
                <h3 className="instructor">
                  {s.instructorLast}, {s.instructorFirst}
                </h3>
                <h2 className="title">{s.subject}</h2>
                <h3 className="info">{s.description}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

Courses.propTypes = {
  getAllSubjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subjects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  subjects: state.subjects,
});

export default connect(mapStateToProps, { getAllSubjects })(Courses);
