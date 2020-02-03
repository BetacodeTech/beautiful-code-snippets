import { combineReducers } from 'redux';
import {snipet} from "./snipet.duck";
import { createStore} from 'redux';

const rootReducer = combineReducers({
    snipet
});

const store = createStore(rootReducer);

export default store;



