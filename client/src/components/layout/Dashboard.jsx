import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllSubjects } from "../../actions/subjects";

const Dashboard = ({
  getAllSubjects,
  auth: { user },
  subjects: { subjects, loading },
}) => {
  useEffect(() => {
    getAllSubjects();
  }, [getAllSubjects]);

  // const dashboardSubjects = subjects.subjects.filter(function(e) {
  //     if(user.status === "Admin" || "Instructor") {
  //         return e.instructorSubjects = user.instructorSubjects
  //     } else {
  //         return e.studentSubjects = user.studentSubjects
  //     }
  // })

  return loading && subjects === null ? (
    <Spinner />
  ) : (
    <div className="dashboard">
        {/* {user && user.status} */}
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
