import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSubjectPosts } from '../../actions/posts';

import '../styles/Posts.scss';

const Posts = ({ name, homework, due, date, likes, comments }) => {
    
    return (
        <div className='posts'>
        {name}
        {homework}
        </div>
    )
}






Posts.propTypes = {
    getSubjectPosts: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { getSubjectPosts })(Posts);