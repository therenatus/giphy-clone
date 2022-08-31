export const GET_GIFS = 'GET_GIFS';
export const GET_GIFS_STATUS = 'GET_GIFS_STATUS';

const initialState = {
    gifs: [],
    status: 'pending'
};

export const gifsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GIFS:
            
            return {
                ...state,
                gifs: state.gifs.concat(action.payload)
            }

        case GET_GIFS_STATUS: 
            return {
                ...state,
                status: action.payload
            }
        default: {
            return {...state}
        }
    }
}