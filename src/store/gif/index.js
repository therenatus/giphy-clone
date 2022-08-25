export const GET_GIFS = 'GET_GIFS';
export const GET_GIFS_LOADING = 'GET_GIFS_LOADING';
export const GET_GIFS_ERROR = "GET_GIFS_LOADING";

const initialState = {
    gifs: [],
    loading: false,
    error: ''
};

export const gifsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GIFS:
            return {
                ...state,
                gifs: action.payload
            }

        case GET_GIFS_LOADING: 
            return {
                ...state,
                loading: action.payload
            }

        case GET_GIFS_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        default: {
            return {...state}
        }
    }
}