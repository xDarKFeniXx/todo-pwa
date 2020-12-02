import {ErrorI, LoadingEnum, NotificationI} from "../types"


const initialState = {
    initialize: LoadingEnum.NEVER,
    error: {showError:false, textError:""} as ErrorI,
    notifications:[] as Array<NotificationI>
}
export const SET_ERROR="app/SET_ERROR"
const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ERROR:{
            return {...state, error: {showError:true, textError:action.payload}}
        }
        default:
            return state
    }
}

export const setErrorActionCreator=(textError:string)=>({
    type:SET_ERROR,
    payload: textError
})

export default appReducer
