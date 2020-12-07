import { AppStateType } from "../root-reducer";



export const loadingTodosSelector=(state:AppStateType)=>state.todos.loading
export const todosSelector=(state:AppStateType)=>state.todos.todosList
export const currentPageSelector=(state:AppStateType)=>state.todos.currentPage
export const totalCountSelector=(state:AppStateType)=>state.todos.maxTotalCount
export const pageSizeSelector=(state:AppStateType)=>state.todos.pageSize
export const pagesCountSelector=(state:AppStateType)=>state.todos.maxTotalCount/state.todos.pageSize
