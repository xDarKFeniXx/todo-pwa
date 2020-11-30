import {combineReducers} from "redux";
import appReducer from "./app-reducer/app-reducer";
import todosReducer from "./todos-reducer/todos-reducer";
import usersReducer from "./users-reducer/users-reducer";

const rootReducer=combineReducers({
    app: appReducer,
    todos: todosReducer,
    users: usersReducer
})

export default rootReducer
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>
