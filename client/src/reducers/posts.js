import {
    GET_POSTS,
    REMOVE_POSTS,
    POSTS_ERROR
} from '../actions/types.js';

const initialState = {
    posts: null,
    loading: true,
    error: {}
}

export default function(state = initialState, actions) {
    const { type, payload } = actions;

    switch(type) {
        case GET_POSTS:
            return  {
                ...state,
                posts: payload,
                loading: false
            };
        case REMOVE_POSTS:
            return {
                posts: null,
                loading: false
            }
        case POSTS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
}