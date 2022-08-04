import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from '../features/todostate/todoSlice'
import  ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

const rootReducer = combineReducers({todos: todosReducer});

const store = createStore(rootReducer, composeEnhancer);

export default store;

