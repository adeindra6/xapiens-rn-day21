import {ISLOGIN, SET_LOGIN, SET_TOKEN, SET_USERNAME} from './constan';

export const isLogin = () => {
    return {type: ISLOGIN};
};

export const setLogin = data => {
    return {type: SET_LOGIN, data};
};

export const setToken = data => {
    return {type: SET_TOKEN, data};
};

export const setUsername = data => {
    return {type: SET_USERNAME, data};
};