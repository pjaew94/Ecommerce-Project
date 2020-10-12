import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { DateTime } from "luxon";

import "../../styles/CommentForm.scss";
import { addComment } from "../../../actions/posts";

import { HiOutlinePlus } from "react-icons/hi";
import { IconContext } from "react-icons";

const CommentForm = ({ addComment }) => {
    return <div className='comment_form'>

    </div>
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm);