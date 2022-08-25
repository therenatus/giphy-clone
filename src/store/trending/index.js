export const GET_TRENDING = 'GET_TRENDING';
export const GET_TRENDING_STATUS = 'GET_TERNDING_LOADING';

const initialState = {
    trending: [],
    status: 'pending'
};

export const trendingReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TRENDING: 
            return {
                ...state,
                trending: action.payload
            }

        case GET_TRENDING_STATUS:
            return {
                ...state,
                status: action.payload
            }
        
        default: {
            return { ...state }
        }
    }
}