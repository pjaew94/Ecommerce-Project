import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllSubjects } from "../../actions/subjects";

import "../styles/Dashboard.scss";

const Dashboard = ({
  getAllSubjects,
  auth: { user },
  subjects: { subjects, loading },
}) => {
  useEffect(() => {
    getAllSubjects(user);
  }, []);

  // Create new array of subjects to display
  let dashboardSubjects = [];

  if (subjects && !loading && user) {
    dashboardSubjects = subjects.filter(function (e) {
      if (user.status === "Admin" || user.status === "Instructor") {
        return e.instructorSubjects === user.instructorSubjects;
      } else {
        return e.studentSubjects === user.studentSubjects;
      }
    });

    console.log(dashboardSubjects.length);
  }

  return loading && subjects === null ? (
    <Spinner />
  ) : (
    <div className="dashboard">
      <div className={dashboardSubjects.length > 2 ? "inner_3" : "inner_2"}>
        {dashboardSubjects &&
          dashboardSubjects.map((subject) => {
            return (
              <div className="subject" key={subject._id}>
                <div className={`title ${subject.instructorSubjects}`}>
                  {subject.subject}
                </div>
                <div className="list_container">
                  <ul>
                    <li>
                      <span>Instructor:</span> {subject.instructorLast},{" "}
                      {subject.instructorFirst}
                    </li>
                    <li>
                      <span>Time:</span> {subject.startTime} - {subject.endTime}
                    </li>
                    <li>
                      <span>Description:</span> {subject.description}
                    </li>
                  </ul>
                </div>
                <div className="button_container">
                  <Link
                    className={`route_button button_${subject.instructorSubjects}`}
                    to={`/${subject.route}`}
                  >Go</Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getAllSubjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subjects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  subjects: state.subjects,
});

export default connect(mapStateToProps, { getAllSubjects })(Dashboard);
