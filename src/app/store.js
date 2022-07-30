import { createStore, combineReducers } from 'redux';
import todosReducer from '../features/todostate/todoSlice'


const rootReducer = combineReducers({todos: todosReducer});

const store = createStore(rootReducer);

export default store;

