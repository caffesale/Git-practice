import { createStore, combineReducers } from 'redux';
import tododuck from '../features/todostate/tododuck'

const rootReducer = combineReducers({tododuck});

const store = createStore(rootReducer);

export default store;

