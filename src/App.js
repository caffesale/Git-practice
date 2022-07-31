import React from 'react';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />}/>
      <Route path="/Detail" element={<TodoDetail/>}/>
    </Routes>
  );
}

export default App;
