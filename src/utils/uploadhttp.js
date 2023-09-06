import Qs from 'qs';
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 500000
})
instance.defaults.headers['Content-Type'] = 'multipart/form-data';
instance.defaults.transformRequest = (data, headers) => {
    const contentType = headers['Content-Type'];
    if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
    return data;
};
instance.interceptors.response.use(response => {
    return response.data;
});

export default instance