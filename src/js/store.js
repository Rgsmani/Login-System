import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers/reducer';

const reducer = combineReducers({ ...reducers });

export default createStore(reducer);