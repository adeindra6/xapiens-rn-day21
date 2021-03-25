import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import globalReducer from './Global/reducer';
import loginReducer from './Login/reducer';
import signupReducer from './Signup/reducer';
import productReducer from './Product/reducer';

const persistConfig = {
    key: 'myApps',
    storage: AsyncStorage,
    blacklist: ['product'],
};

const rootReducer = combineReducers({
    global: globalReducer,
    login: loginReducer,
    signup: signupReducer,
    product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);
export const persistor = persistStore(store);

export default {};