import axios from 'axios';
import env from '../setupEnv';

const instance = axios.create({
    baseURL: env.baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    transformRequest: [(data, headers) => {
        headers['Host'] = env.baseURL;
        return JSON.stringify(data);
    }]
});

export default instance;