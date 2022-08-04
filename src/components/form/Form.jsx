import React, {useState} from "react";
import './style.css';
import { v4 } from 'uuid'

import { useDispatch } from 'react-redux';
import { addTodo, addTodoFB } from '../../features/todostate/todoSlice'


function Form() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
        // id:0,
        title:"",
        body:"",
        isDone:false
    })

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setTodo({...todo, [name]: value})
    }


    function onSubmitHandler(event) {
        event.preventDefault();
        
        // const id = v4();

        let data = {
            // id : id,
            title : todo.title,
            body : todo.body,
            isDone : false,
        }

        // console.log(data)

        dispatch(addTodoFB(data));

        setTodo({
            // id:0,
            title:"",
            body:"",
            isDone:false
        })
    }
    

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <label className="form-label" htmlFor="title">제목</label>
                <input className="add-input input-body" type="text" id="title" name="title" required value={todo.title} onChange={onChangeHandler}/>
                <label className="form-label" htmlFor="content">내용</label>
                <input className="add-input input-body" type="text" id="content" name="body" required value={todo.body} onChange={onChangeHandler}/>
            </div>
            <button className="add-button">추가하기</button>
        </form>
    )
}

export default Form