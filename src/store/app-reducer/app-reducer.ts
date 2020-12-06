import {ErrorI, InferActionsTypes, LoadingEnum, NotificationI} from "../types"


const initialState = {
    initialize: LoadingEnum.NEVER,
    error: {showError:false, textError:""} as ErrorI,
    notifications:[] as Array<NotificationI>
}
export const SET_ERROR="app/SET_ERROR"
export const LOADING="app/LOADING"
export const LOADED="app/LOADED"
const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case LOADING:{
            return {...state, loading: LoadingEnum.LOADING}
        }
        case LOADED:{
            return {...state, loading: LoadingEnum.LOADED}
        }
        case SET_ERROR:{
            return {...state, error: {showError:true, textError:action.payload}}
        }
        default:
            return state
    }
}


export const appReducerActions={
    setGlobalError: (textError:string)=>({
        type:SET_ERROR,
        payload: textError
    } as const),
    setGlobalLoading: ()=>({type: LOADING} as const),
    setGlobalLoaded: ()=>({type: LOADED} as const),
}
type ActionsTypes = InferActionsTypes<typeof appReducerActions>
export default appReducer
