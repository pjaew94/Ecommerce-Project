import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllSubjects } from "../../actions/subjects";

import '../styles/Dashboard.scss';


const Dashboard = ({
  getAllSubjects,
  auth: { user },
  subjects: { subjects, loading },
}) => {

    const [dashSub, setDashSub] = useState();

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

  }


  return loading && subjects === null ? (
    <Spinner />
  ) : (
    <div className="dashboard">
        {dashboardSubjects && dashboardSubjects.map((subject) => {
            return (
                <ul key={subject._id}>
                {subject._id}

                </ul>
            )
        })}
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
