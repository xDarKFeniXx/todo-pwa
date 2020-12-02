import {LoadingEnum, UserI} from "../types";

const initialState={
    loading:LoadingEnum.NEVER,
    usersList:[] as Array<UserI>
}
export const SET_USERS="users/SET_USERS"
export const FETCH_USERS="users/FETCH_USERS"
export const LOADING="users/LOADING"
export const LOADED="users/LOADED"
const usersReducer=(state=initialState, action:userReducerActionTypes)=>{
    switch(action.type){
        case LOADING:{
            return {...state, loading: LoadingEnum.LOADING}
        }
        case LOADED:{
            return {...state, loading: LoadingEnum.LOADED}
        }
        case SET_USERS:{
            return {...state, usersList: action.payload}
        }
        default:
            return state
    }
}
export type fetchUsersActionType={
    type:typeof FETCH_USERS
}
export type setUsersActionType={
    type: typeof SET_USERS,
    payload: Array<UserI>
}
export default usersReducer
type userReducerActionTypes=setUsersActionType|{type:typeof LOADING}|{type:typeof LOADED}
