import {InferActionsTypes, LoadingEnum, UserI} from "../types";

const initialState={
    loading:LoadingEnum.NEVER,
    usersList:[] as Array<UserI>
}
export const SET_USERS="users/SET_USERS"
export const FETCH_USERS="users/FETCH_USERS"
export const LOADING="users/LOADING"
export const LOADED="users/LOADED"
const usersReducer=(state=initialState, action:ActionsTypes)=>{
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

export const usersReducerActions={
    setLoadingAC: ()=>({type: LOADING} as const),
    setLoadedAC: ()=>({type:LOADED} as const),
    setUsersAC: (users:Array<UserI>)=>({type:SET_USERS, payload:users} as const),
    fetchUsersAC: ()=>({type:FETCH_USERS} as const),
}
export default usersReducer
type ActionsTypes = InferActionsTypes<typeof usersReducerActions>
