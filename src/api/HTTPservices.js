import axios from 'axios';


axios.defaults.baseURL = `http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_API_KEY}`;

axios.interceptors.response.use(null, error => {
    const clientErrors = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!clientErrors) {
        console.error(error);
    }

    return Promise.reject(error);

});


export default {
    get: axios.get

};