import axios from 'axios'
export default {
    getJokes: function(path) {
        return axios.get(path);
    }
}