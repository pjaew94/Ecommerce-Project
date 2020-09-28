import { combineReducers } from 'redux';

import alert from './alert'
import auth from './auth'
import subjects from './subjects'


export default combineReducers({
    alert,
    auth,
    subjects,
});