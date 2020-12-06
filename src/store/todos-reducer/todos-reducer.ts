import {InferActionsTypes, LoadingEnum, TodoI} from "../types";

const initialState={
    loading:LoadingEnum.NEVER,
    todosList:[] as Array<TodoI>
}
export const FETCH_TODOS="todos/FETCH_TODOS"
export const LOADING="todos/LOADING"
export const LOADED="todos/LOADED"
export const SET_TODOS="todos/SET_TODOS"
export const TOGGLE_TODO="todos/TOGGLE_TODO"
export const EDIT_TODO="todos/EDIT_TODO"
export const FETCH_TOGGLE_TODO="todos/FETCH_TOGGLE_TODO"
export const FETCH_EDIT_TODO="todos/FETCH_EDIT_TODO"
export const FETCH_ADD_TODO="todos/FETCH_ADD_TODO"
export const ADD_TODO="todos/ADD_TODO"
const todosReducer=(state=initialState, action:ActionsTypes):InitialState=>{
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


export const todoReducerActions={
    setLoadingStatusAC:()=>({
        type: LOADING
    } as const),
    setLoadedStatusAC:()=>({
        type: LOADED
    } as const),
    fetchTodosAC:()=>({
        type: FETCH_TODOS
    } as const),
    setTodosAC:(todos:Array<TodoI>)=>({
        type:SET_TODOS,
        payload:todos
    } as const),
    toggleTodoAC:(id:number)=>({
        type: TOGGLE_TODO,
        payload: id
    } as const),

    editTodoAC:(todo:TodoI)=>({
        type: EDIT_TODO,
        payload: todo
    } as const),

    fetchEditTodoAC:(todo:TodoI)=>({
        type: FETCH_EDIT_TODO,
        payload: todo
    } as const),

    fetchToggleTodoAC:(id:number, value:boolean)=>({
        type: FETCH_TOGGLE_TODO,
        payload: {id, value}
    } as const),
    addTodoAC:(todo:TodoI)=>({
        type:ADD_TODO,
        payload: todo
    } as const),

    fetchAddTodoAC:(title:string, userId:number)=>({
        type: FETCH_ADD_TODO,
        payload: {title, userId}
    } as const),
}
type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof todoReducerActions>
export default todosReducer
