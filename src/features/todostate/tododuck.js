// Actions

const ADD = 'todos/ADD';
const REMOVE = 'todos/REMOVE';
const EDIT = 'todos/EDIT';

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
            isDone: true,
        },
    ]
};

export function addTodo(task) {
    return {type: ADD, task:task };
}

export function removeTodo(task) {
    return {type: REMOVE, task:task}
}

export function editTodo(task) {
    return {type: EDIT, task:task}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD:
            const add_list = [...state.list, action.task]
            return { list: add_list };
        case REMOVE:
            const remove_list = state.list.filter((value) => {
                return value.id !== action.task.id;
            })
            return { list : remove_list};
        case EDIT:
            const edit_list = state.list.map((value) => {
                if(value.id === action.task.id){
                    return {...value, isDone:!value.isDone}
                }
                else{
                    return {...value}
                }
            });
            return { list: edit_list};
        default:
            return state;
    }
}