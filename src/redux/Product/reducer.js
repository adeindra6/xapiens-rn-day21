import {SET_DATA, SET_LOADING, PRODUCT} from './constan';

const initialState = {
    list: [],
    loading: false,
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT:
            return {...state, loading: true};
        case SET_DATA:
            return {...state, list: action.data};
        case SET_LOADING:
            return {...state, loading: action.data};
        default:
            return state;
            break;
    }
};

export default productReducer;