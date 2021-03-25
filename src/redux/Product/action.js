import axios from 'axios';

import {SET_DATA, SET_LOADING, PRODUCT} from './constan';

export const setList = data => {
    return {type: SET_DATA, data};
};

export const setLoading = data => {
    return {type: SET_LOADING, data};
};

export const fetchProduct = (token = '') => dispatch => {
    dispatch(setLoading(true));
    axios
     .get(`http://simple-wms.herokuapp.com/api/v1/product`, {
         headers: {
             "Authorization": `token ${token}`
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