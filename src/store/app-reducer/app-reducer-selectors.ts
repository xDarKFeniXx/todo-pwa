import { AppStateType } from "../root-reducer";



export const initializationSelector=(state:AppStateType)=>state.app.initialize
export const appErrorSelector=(state:AppStateType)=>state.app.error
