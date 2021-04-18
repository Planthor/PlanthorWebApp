import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: '/api',
    paramsSerializer: (params) => queryString.stringify(params, { arrayFormat: 'comma' })
});

axiosClient.interceptors.request.use(async (config) => {
    const contentType = config.headers['Content-Type'];
    if (!contentType) {
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
});

axiosClient.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;