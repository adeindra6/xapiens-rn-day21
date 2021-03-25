import {SET_DATA, SET_LOADING, SIGNUP} from './constan';

const initialState = {
    list: [],
    loading: false,
};

const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP:
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

export default signupReducer;