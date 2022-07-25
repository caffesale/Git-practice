import React from "react";
import './style.css';
import { useRef } from 'react'
import { useState } from 'react'

function Form({ todos, setTodos}) {
    const titleInputRef = useRef();
    const contentInputRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        
        const id = todos.length +1;
        const enteredTitle = titleInputRef.current.value;
        const enteredBody = contentInputRef.current.value;

        const Data = {
            id : id,
            title : enteredTitle,
            body : enteredBody,
            isDone : false,
        }
        
        setTodos([...todos, Data]);
    }
    

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <label className="form-label" htmlFor="title">제목</label>
                <input className="add-input input-body" type="text" id="title" required ref={titleInputRef}/>
                <label className="form-label" htmlFor="content">내용</label>
                <input className="add-input input-body" type="text" id="content" required ref={contentInputRef}/>
            </div>
            <button className="add-button">추가하기</button>
        </form>
    )
}

export default Form