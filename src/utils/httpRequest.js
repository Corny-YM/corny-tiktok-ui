// THU VIEN axios
import axios from 'axios';

// TAO RA 1 INSTANCE - CO CAU HINH LA: request
const httpRequest = axios.create({
    // baseURL LA API ENDPOINT DIEM TRUY CAP CUOI
    baseURL: process.env.REACT_APP_BASE_URL,
});

// CUSTOM FUNCTION FOR AXIOS
// truoc ham nay co ASYNC => la 1 ham khi goi ham nay se tra ve Promise
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
