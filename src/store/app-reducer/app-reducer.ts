import {LoadingEnum} from "../types"


const initialState = {
    initialize: LoadingEnum.NEVER
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}
export default appReducer
