import axios from "axios";

import { GET_POSTS, REMOVE_POSTS, POSTS_ERROR } from "./types";

// Get posts for the specific subject;
export const getSubjectPosts = (subject) => async dispatch => {
  try {

      const res = await axios.get(`/api/posts/${subject}`);

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const removeSubjectPosts = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_POSTS,
            payload: null
        })
    } catch (err) {
        dispatch({
            type: POSTS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
          });
    }
}