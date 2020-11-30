import { instance } from "./api"


export const todosAPI={
    async getAllTodos(){
        return await instance.get('todos')
    },
    async toggleTodo(id:number){
        return await instance.patch(`todos/${id}`, {completed:true})
    }
}
