import { AppStateType } from "../root-reducer";



export const loadingUsersSelector=(state:AppStateType)=>state.users.loading
export const usersSelector=(state:AppStateType)=>state.users.usersList
