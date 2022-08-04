import { configureStore } from '@reduxjs/toolkit';

import todosReducer from '../features/todostate/todoSliceTK';

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store;