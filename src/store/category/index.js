export const GET_CATEGORIES = 'GET_CAEGORIES';
export const GET_CATEGORIES_STATUS = 'GET_CATEGORIES_STATUS';
export const SET_CATEGORY = 'SET_CATEGORY'

const initialState = {
    categories: [],
    status: 'pending',
    category: 0
};

export const categoriesReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case GET_CATEGORIES_STATUS: 
            return {
                ...state,
                status: action.payload
            }
        
        case SET_CATEGORY:
            return{
                ...state,
                category: action.payload
            }
        default: {
            return {...state}
        }
    }
}