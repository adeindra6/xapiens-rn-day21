import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import globalReducer from './Global/reducer';
import loginReducer from './Login/reducer';
import signupReducer from './Signup/reducer';

const customMiddleWare = (store) => {
    return (next) => {
        return (action) => {

        }
    }
};

const rootReducer = combineReducers({
    global: globalReducer,
    login: loginReducer,
    signup: signupReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;