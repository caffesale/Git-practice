import React from 'react';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail'
import { Route, Routes } from 'react-router-dom';
import { fetchTodos } from './features/todostate/todoSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  })

  return (
    <Routes>
      <Route path="/" element={<TodoList />}/>
      <Route path="/Detail" element={<TodoDetail/>}/>
    </Routes>
  );
}

export default App;
