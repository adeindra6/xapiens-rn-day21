import axios from 'axios';

import {SET_DATA, SET_LOADING, SIGNUP} from './constan';

export const setList = data => {
    return {type: SET_DATA, data};
};

export const setLoading = data => {
    return {type: SET_LOADING, data};
};

export const Signup = (full_name = '', username = '', password = '', phone_number = '', email = '') => dispatch => {
    dispatch(setLoading(true));
    axios
     .post(`http://simple-wms.herokuapp.com/api/v1/auth/signup`, {
         "data": {
             "full_name": full_name,
             "username": username,
             "password": password,
             "phone_number": phone_number,
             "email": email
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