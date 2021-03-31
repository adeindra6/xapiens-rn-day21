import {ISLOGIN, SET_LOGIN, SET_TOKEN, SET_USERNAME} from './constan';

const initialState = {
    isLogin: false,
    token: '',
    username: '',
};

const globalReducer = (state = initialState, action) => {
    //console.log({action});
    switch(action.type) {
        case ISLOGIN:
            const {isLogin} = state;
            return {...state, isLogin};
        case SET_LOGIN:
            return {...state, isLogin: action.data};
        case SET_TOKEN:
            return {...state, token: action.data};
        case SET_USERNAME:
            return {...state, username: action.data};
        default:
            return state;
    }
};

export default globalReducer;