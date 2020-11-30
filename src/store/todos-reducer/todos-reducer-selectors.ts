import { AppStateType } from "../root-reducer";



export const loadingTodosSelector=(state:AppStateType)=>state.todos.loading
export const todosSelector=(state:AppStateType)=>state.todos.todosList
