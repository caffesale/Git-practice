import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";

const initialState = [];

//thunk function

// export const loadTodosFB = () => {
//     return async function (dispatch) {
//         const todo_data = await getDocs(collection(db, "todos"));
//         let todols = [];

//         todo_data.forEach((doc) => {
//             // console.log(doc.data())
//             // todols = [...todols, {...doc.data()}];
//             todols.push({id:doc.id, ...doc.data()})
//         })

//         // console.log(todols)
//         dispatch(loadTodos(todols))
//     }
// }

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
    const response = await fetch('http://localhost:5001/list')
    return response.json()
})


//reducers
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoLoaded(state, action){
            return { list: action.todo_list }
        },
        todoAdded(state, action){
            state.list.push(action.task);
        },
        todoeDeleted(state, action){
            state.list.filter((value) => {
                return value.id !== action.task
            })
        },
        todoEdited(state, action){
            state.list.map((value) => {
                if(value.id === action.id){
                    return {...value, isDone:!value.isDone}
                }
                else{
                    return {...value}
                }
            });
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                // working 
            })
    }
})

export const { todoLoaded, todoAdded, todoeDeleted, todoEdited} = todosSlice.actions;

export default todosSlice.reducer