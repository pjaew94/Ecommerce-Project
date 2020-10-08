import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, removeLike, addComment, removeComment } from "../../actions/posts";


import { HiHeart, HiOutlineHeart, HiOutlinePlus } from "react-icons/hi";
import { BiComment } from "react-icons/bi";
import { IconContext } from "react-icons";

import "../styles/Posts.scss";

const Posts = ({ postId, name, homework, due, date, likes, comments, userId, subject, addLike, removeLike, addComment, removeComment }) => {

  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(()=> {
    likes && likes.map((e)=>{
        if(e.user === userId) {
            return setLike(true)
        }
        return(like)
    })
  },[])




// Like post logic function
const likePost = () => {
    if(like === false) {
        addLike(postId)
        setLike(true)
    } else {
        removeLike(postId)
        setLike(false)
    }
}



// Comments that gets toggled
  const theComments = (
    <div className="comments">
      {comments &&
        comments.map((comment) => {
          return <div className="comment" key={comment._id} onClick={() => test(comment._id)}>
              <h3>{comment.text}</h3>
              <div className='by'>
                  <h4>{comment.name}</h4>
                  <h4>{comment.date}</h4>
              </div>
          </div>;
        })}
    </div>
  );

  const test = (id) => {
    removeComment(postId, id, subject)

  }




  return (
    <div className="post_container">
      <div className="post">
        <div className="left">
          <h3 className="homework">
            <span>Homework:</span> {homework}
          </h3>
          <h3 className="due">
            <span>Due:</span> {due}
          </h3>
        </div>
        <div className="right">
          <div className="by">
            <h3>By: {name}</h3>
            <h3>{date}</h3>
          </div>
          <div className="dopamine">
            <div className="button_container">
              <button className="like_button" onClick={() => likePost()}>
                <IconContext.Provider value={{ className: `icon ${like ? "liked" : "no_like"}`}}>
                  {like ? <HiHeart /> : <HiOutlineHeart />}
                </IconContext.Provider>
              </button>
              <h4>{likes && likes.length}</h4>
            </div>
            <div className="button_container">
              <button className="comment_button" onClick={() => setShowComments(!showComments)}>
                <IconContext.Provider value={{ className: "icon" }}>
                  <BiComment />
                </IconContext.Provider>
              </button>
              <h4>{comments && comments.length}</h4>
            </div>
            <button className="add_button" onClick={()=> test()}>
              <IconContext.Provider value={{ className: "icon" }}>
                <HiOutlinePlus />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
      {showComments === true ? theComments : null}
    </div>
  );
};

Posts.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, addComment, removeComment })(Posts);
