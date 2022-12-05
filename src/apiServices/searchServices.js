// Axios
// LAY TOAN BO FUNCTION TRONG FILE PATH TRU export default
import * as request from '~/utils/request';

// EXPORT RA 1 FUNCTION => TRA VE PROMISE
export const search = async (query, type = 'less') => {
    // then thi lot vao day
    try {
        // encodeURIComponent: ma hoa cac ki tu gay hieu nham tren URL thanh hop le
        // await LUON NAM TRUOC CAC PROMISE
        const res = await request.get('users/search', {
            params: {
                q: query,
                type: type,
            },
        });
        // res = response.data -> PATH: utils/request.js
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
