import React from "react";
import { useLocation, useNavigate }from 'react-router-dom'


function DetailPage() {
    const location = useLocation();
    const navi = useNavigate();
    const { todo } = location.state;
    

    return (
        <div>
            <div>
                <div>{todo.id}</div>
                <button onClick={() => {
                    console.log(navi)
                    navi(-1)
                }}>prev</button>
            </div>
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>
        </div>
    )
}

export default DetailPage;