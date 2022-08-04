import React from "react";
import Todo from '../todo/Todo'
import './style.css'

import {useSelector} from 'react-redux'



function List() {

    const list = useSelector(state => state.todos.list);

    return (
        <div className="list-container">
            <h2>Working...</h2>
                <div className="list-wrapper">
                    {list.map((task) => { 
                        if(!task.isDone){ 
                            return <Todo 
                                todoId={task.id}
                                key={task.id}
                            />
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            <h2>Done...!</h2>
                <div className="list-wrapper">
                    {list.map((task) => {
                        if(task.isDone){
                            return <Todo 
                                todoId={task.id}
                                key={task.id}
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