import React from 'react';
import './style.css'

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { removeTodo, editTodo } from '../../features/todostate/todoSlice'
import { Link } from 'react-router-dom'

const selectedTodoById = (state, todoId) => {
    return state.todos.list.find(todo => todo.id === todoId)
}

function Todo({todoId}) {

    const todo = useSelector(state => selectedTodoById(state, todoId), shallowEqual);
    const dispatch = useDispatch();
    
    function onDeleteHandler(todoId) {
        dispatch(removeTodo(todoId));
    }

    function onEditHandler(todoId) {
        dispatch(editTodo(todoId))
    }


    return (
        <div className="todo-container">
            <div>
                <Link to="/Detail" state={{ todo:todo }}>Detail</Link>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
            <div className="button-set">
                <button
                    className="todo-delete-button button"
                    onClick={() => onDeleteHandler(todoId)}>
                    삭제하기
                </button>
                <button
                    className="todo-complete-button button"
                    onClick={() => onEditHandler(todoId)}>
                    {todo.isDone ? "취소" : "완료"}
                </button>
            </div>
        </div>
    )
}

export default Todo;

