import axios from 'axios';

import {SET_DATA, SET_LOADING, LOGIN} from './constan';

export const setList = data => {
    return {type: SET_DATA, data};
};

export const setLoading = data => {
    return {type: SET_LOADING, data};
};

export const Login = (username = '', password = '') => dispatch => {
    dispatch(setLoading(true));
    axios
     .post(`http://simple-wms.herokuapp.com/api/v1/auth/login`, {
         "data": {
             "username": username,
             "password": password
         }
     })
     .then(response => {
        dispatch(setList(response.data));
        console.log(response.data);
     })
     .catch(error => {
         console.log(error);
     })
     .finally(() => {
        dispatch(setLoading(false));
     });
};