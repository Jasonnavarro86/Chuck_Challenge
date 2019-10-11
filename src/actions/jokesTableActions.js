import { LOAD_JOKES, FETCH_JOKES, DELETE_JOKE } from './types';
import API from '../utils/API'

export const loadJokes = () => dispatch => {
    //Using axios rather then fetch to make code just a bit leaner and handle data faster.
    API.getJokes("http://api.icndb.com/jokes")
        .then(jokes => dispatch({
            type: LOAD_JOKES,
            payload: jokes.data.value
        })
    );
};

export const fetchJokes = () => dispatch => {
         dispatch({
            type: FETCH_JOKES
        })
};

export const deleteJokes = (jokeIndex) => dispatch => {
    dispatch({
        type: DELETE_JOKE,
        index: jokeIndex
    })
};