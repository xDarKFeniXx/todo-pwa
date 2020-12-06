import { instance } from "./api"
import {APIResponseType, UserI} from "../store/types";



export const userAPI={
    async fetchUsers(){
        return await instance.get<APIResponseType<Array<UserI>>>('users')
    }
}
