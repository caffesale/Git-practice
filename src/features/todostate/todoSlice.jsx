
// Actions

const LOAD = 'todos/todolisted'
const ADD = 'todos/todoAdded';
const DELETE = 'todos/todoDeleted';
const EDIT = 'todos/todoEdited';

const initialState = {
    list: [
        {
            id: 1,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다.",
            isDone: false,
        },
        {
            id: 2,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다.",
            isDone: false,
        },
    ]
};

// action creater
export function todolist(todo_list) {
    return {type:LOAD, todo_list};
}

export function addTodo(task) {
    return {type: ADD, task };
}

export function removeTodo(task) {
    return {type: DELETE, task}
}

export function editTodo(id) {
    return {type: EDIT, id}
}

//thunk function
export async function fetchTodos(dispatch, getState) {
    const response = await fetch('http://localhost:5001/list');
    const datalist = response.json()

    console.log(datalist)
}

export function addTodoThunk(todo) {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:5001/list', );
        const todols = response.todos.list;
        // console.log(todols);
        dispatch(addTodo(todols))
    }
}


// reducers
export default function todosReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            console.log(action)
            return { list: action.datalist}
        }


        case ADD: {
            const added_list = [...state.list, action.task]
            console.log(action);

            return { list: added_list };
        }

        case DELETE: {
            const removed_list = state.list.filter((value) => {
                return value.id !== action.task;
            });
            return { list : removed_list};
        }

        case EDIT: {
            const edited_list = state.list.map((value) => {
                if(value.id === action.id){
                    return {...value, isDone:!value.isDone}
                }
                else{
                    return {...value}
                }
            });
            return { list: edited_list};
        }

        default:
            return state;
    }
}