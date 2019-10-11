import { combineReducers } from 'redux';
import jokesTableReducer from './jokesTableReducer';

export default combineReducers({
    Jokes: jokesTableReducer
});