import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';
import defaultState from './defaultState';
export default () => {
    const store = createStore(counterReducer, defaultState);
    return store;
}

