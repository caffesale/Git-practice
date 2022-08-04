import { db } from '../../api/firebase'
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore'
// Actions

const LOAD = 'todos/todosLoaded'
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

export function loadTodos(todo_list) {
    return {type:LOAD, todo_list}
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

//middlewares
export const loadTodosFB = () => {
    return async function (dispatch) {
        const todo_data = await getDocs(collection(db, "todos"));
        let todols = [];

        todo_data.forEach((doc) => {
            // console.log(doc.data())
            // todols = [...todols, {...doc.data()}];
            todols.push({id:doc.id, ...doc.data()})
        })

        // console.log(todols)
        dispatch(loadTodos(todols))
    }
}

export const addTodoFB = (data) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "todos"), data);
        const _data = await getDoc(docRef);
        // console.log((await getDoc(docRef)).data());

        dispatch(addTodo({id:_data.id, ..._data.data()}));
    }
}

export const editTodoFB = (todoId) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "todos", todoId);
        const task_data = await getDoc(docRef);
        
        if(!task_data.data().isDone){
            await updateDoc(docRef, { isDone:true });
        }
        else{
            await updateDoc(docRef, { isDone:false });
        }
        
        // const _task_list = getState().todos.list;
        // const idx = _task_list.findIndex((t) => {
        //     return t.id === todoId;
        // })

        dispatch(editTodo(todoId));
    }
}

export const removeTodoFB = (todoId) => {
    return async function (dispatch) {
        const docRef = doc(db, "todos", todoId);
        await deleteDoc(docRef);

        dispatch(removeTodo(todoId));
    }
}

// reducers
export default function todosReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            // console.log(action.todo_list);
            return { list: action.todo_list }
        }
        case ADD: {
            // console.log(action);
            const added_list = [...state.list, action.task]
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