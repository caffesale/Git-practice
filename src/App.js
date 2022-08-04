import React from 'react';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail'
import { Route, Routes } from 'react-router-dom';

import { db } from './api/firebase'
import { loadTodosFB } from './features/todostate/todoSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadTodosFB());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<TodoList />}/>
      <Route path="/Detail" element={<TodoDetail/>}/>
    </Routes>
  );
}

export default App;
