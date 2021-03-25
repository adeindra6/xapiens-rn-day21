import {SET_DATA, SET_LOADING, LOGIN} from './constan';

const initialState = {
    list: [],
    loading: false,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
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

export default loginReducer;