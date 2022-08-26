import { GET_TRENDING, GET_TRENDING_STATUS } from "..";
import { getTrandingApi } from "../../../api";


const getTrendingStatus = (status) => ({
    type: GET_TRENDING_STATUS,
    payload: status
});

export const getTrending = (limit=50) => async(dispatch) => {
    try {
        dispatch(getTrendingStatus('pending'));
        const trending = await getTrandingApi(limit); 
        console.log(trending)   
        dispatch(getTrendingStatus('fulfilled'));
        dispatch({
            type: GET_TRENDING,
            payload: trending.data.data
        })
    } catch (error) {
       dispatch(getTrendingStatus('rejected'));
    }
}