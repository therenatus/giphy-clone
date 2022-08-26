import { GET_GIFS, GET_GIFS_STATUS } from "..";
import { getGifsApi } from "../../../api";

export const getGifsLoading = (status) => ({
    type: GET_GIFS_STATUS,
    payload: status
});

export const getGifs = (query) => async(dispatch) => {
    try {
        dispatch(getGifsLoading('pending'));
        const gifs = await getGifsApi(query);
        dispatch(getGifsLoading('fulfilled'));
        dispatch({
            type: GET_GIFS,
            payload: gifs.data.data
        });
    } catch (error) {
        dispatch(getGifsLoading('rejected'));
    }
} 