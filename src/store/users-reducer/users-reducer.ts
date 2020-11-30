import {LoadingEnum} from "../types";

const initialState={
    loading:LoadingEnum.NEVER,
    usersList:[]
}
const usersReducer=(state=initialState, action:any)=>{
    switch(action.type){
        default:
            return state
    }
}

export default usersReducer
