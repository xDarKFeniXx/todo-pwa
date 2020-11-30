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
export const FETCH_TOGGLE_TODO="todos/FETCH_TOGGLE_TODO"
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
export const fetchToggleTodoActionCreator=(id:number)=>({
    type: FETCH_TOGGLE_TODO, //TODO а нужен ли? можно отследить обычный тогл туду
    payload: id
})
export default todosReducer
