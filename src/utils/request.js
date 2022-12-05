// THU VIEN axios
import axios from 'axios';

// TAO RA 1 INSTANCE - CO CAU HINH LA: request
const request = axios.create({
    // baseURL LA API ENDPOINT DIEM TRUY CAP CUOI
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// CUSTOM FUNCTION FOR AXIOS
// truoc ham nay co ASYNC => la 1 ham khi goi ham nay se tra ve Promise
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
