import { GET_CATEGORIES, GET_CATEGORIES_STATUS, SET_CATEGORY } from "..";
import { getCatrgoriesApi } from "../../../api";

export const getCatrgoriesStatus = (status) => ({
    type: GET_CATEGORIES_STATUS,
    payload: status
});

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const getCatrgories = () => async(dispatch) => {
    try {
        dispatch(getCatrgoriesStatus('pending'));
        const res = await getCatrgoriesApi();
        dispatch(getCatrgoriesStatus('fulfilled'));
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data
        })
    } catch (err) {
        dispatch(getCatrgoriesStatus('rejected'));
    }
}
