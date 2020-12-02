import {LoadingEnum, TodoI} from "../types";

const initialState={
    loading:LoadingEnum.NEVER,
    todosList:[] as Array<TodoI>
}
export const FETCH_TODOS="todos/FETCH_TODOS"
export const LOADING="todos/LOADING"
export const LOADED="todos/LOADED"
export const SET_TODOS="todos/SET_TODOS"
export const TOGGLE_TODO="todos/TOGGLE_TODO"
export const EDIT_TODO="todos/TOGGLE_TODO"
export const FETCH_TOGGLE_TODO="todos/FETCH_TOGGLE_TODO"
export const FETCH_EDIT_TODO="todos/FETCH_EDIT_TODO"
export const FETCH_ADD_TODO="todos/FETCH_ADD_TODO"
export const ADD_TODO="todos/ADD_TODO"
const todosReducer=(state=initialState, action:any)=>{
    switch(action.type){
        case LOADING:{
            return {...state, loading: LoadingEnum.LOADING}
        }
        case LOADED:{
            return {...state, loading: LoadingEnum.LOADED}
        }
        case SET_TODOS:{
            return {...state, todosList: action.payload}
        }
        case TOGGLE_TODO:{
            const index=state.todosList.findIndex(item=>item.id===action.payload)
            const oldItem=state.todosList[index]
            const newItem={...oldItem, completed:!oldItem.completed}
            const newArray=[...state.todosList.slice(0,index), newItem, ...state.todosList.slice(index+1)]
            return {
                ...state,
                todosList: newArray
            }
        }
        case EDIT_TODO:{
            const index=state.todosList.findIndex(item=>item.id===action.payload.id)
            const newArray=[...state.todosList.slice(0,index), action.payload, ...state.todosList.slice(index+1)]
            return {
                ...state,
                todosList: newArray
            }
        }
        case ADD_TODO:{
            return {...state,

            todosList: [action.payload, ...state.todosList]
            }
        }
        default:
            return state
    }
}
export const fetchTodosActionCreator=()=>({
    type: FETCH_TODOS
})
export const setTodosActionCreator=(todos:Array<TodoI>)=>({
    type:SET_TODOS,
    payload:todos
})
export const toggleTodoActionCreator=(id:number)=>({
    type: TOGGLE_TODO,
    payload: id
})
export const editTodoActionCreator=(todo:TodoI)=>({
    type: EDIT_TODO,
    payload: todo
})
export const fetchEditTodoActionCreator=(todo:TodoI)=>({
    type: FETCH_EDIT_TODO,
    payload: todo
})
export type fetchEditTodoActionType={
    type:typeof FETCH_EDIT_TODO,
    payload:TodoI
}
export const fetchToggleTodoActionCreator=(id:number, value:boolean)=>({
    type: FETCH_TOGGLE_TODO, //TODO а нужен ли? можно отследить обычный тогл туду
    payload: {id, value}
})
export const addTodoActionCreator=(todo:TodoI):addTodoActionType=>({
    type:ADD_TODO,
    payload: todo
})
export type addTodoActionType={
    type: typeof ADD_TODO,
    payload :TodoI
}
export type fetchAddTodoActionType={
    type: typeof FETCH_ADD_TODO,
    payload: { title:string, userId:number }
}
export const fetchAddTodoActionCreator=(title:string, userId:number)=>({
    type: FETCH_ADD_TODO,
    payload: {title, userId}
})
export default todosReducer
