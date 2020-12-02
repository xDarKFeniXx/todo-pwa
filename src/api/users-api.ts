import { instance } from "./api"



export const userAPI={
    async fetchUsers(){
        return await instance.get('users')
    }
}
