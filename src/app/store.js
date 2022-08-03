import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from '../features/todostate/todoSlice'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({todos: todosReducer});

const store = createStore(rootReducer, composeEnhancer);

export default store;

