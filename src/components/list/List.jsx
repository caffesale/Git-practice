import React from "react";
import Todo from '../todo/Todo'
import './style.css'
// import { useDispatch } from 'react-redux'
// import { removeTodo, editTodo } from '../features/todostate/tododuck'

function List({ todos, setTodos }) {
    // const dispatch = useDispatch();

    function onDeleteHandler(todoId) {
        const newTodos = todos.filter((todo)=>{
            return todo.id !== todoId;
        })

        setTodos(newTodos);
        // dispatch(removeTodo(todoId));
    }

    function onEditHandler(todoId) {
        const newTodos = todos.map((todo) => {
            if(todo.id === todoId){
                return {
                    ...todo,
                    isDone: !todo.isDone,
                }
            }
            else{
                return {...todo};
            }
        });

        setTodos(newTodos);
        // dispatch(editTodo(todoId))
    }

    return (
        <div className="list-container">
            <h2>Working...</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if(!todo.isDone){
                        return <Todo 
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                        />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <h2>Done...!</h2>
            <div className="list-wrapper">
            {todos.map((todo) => {
                if(todo.isDone){
                    return <Todo 
                        todo={todo}
                        key={todo.id}
                        setTodos={setTodos}
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                    />
                }
                else{
                    return null;
                }
            })}
            </div>
        </div>
    )
}

export default List;