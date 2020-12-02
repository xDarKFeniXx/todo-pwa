import { instance } from "./api"
import {APIResponseType, TodoI} from "../store/types";


export const todosAPI={
    async getAllTodos(){
        return await instance.get<APIResponseType<Array<TodoI>>>('todos')
    },
    async toggleTodo(id:number, value:boolean){
        return await instance.patch(`todos/${id}`, {completed:value})
    }
}
