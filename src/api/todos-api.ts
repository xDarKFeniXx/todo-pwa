import {instance} from "./api"
import {APIResponseType, TodoI} from "../store/types";


export const todosAPI = {
    async getAllTodos() {
        return await instance.get<APIResponseType<Array<TodoI>>>('todos')
    },
    async toggleTodo(id: number, value: boolean) {
        return await instance.patch(`todos/${id}`, {completed: value})
    },
    async addTodo(title: string, id=null as string|number|null, userId=1) {
        if(!id){
            id=Date.now()
        }
        return await instance.post('todos', {title, userId, completed: false, id})
    },
    async deleteTodo(id: number) {
        return await instance.delete(`todos/${id}`)
    },
    async editTodo(todo:TodoI){
        return await instance.put(`todos/${todo.id}`, todo)
    }
}
