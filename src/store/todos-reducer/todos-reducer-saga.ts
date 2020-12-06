import {call, put, takeEvery, takeLatest} from "redux-saga/effects"
import {todosAPI} from "../../api/todos-api";
import {appReducerActions} from "../app-reducer/app-reducer";
import {FETCH_ADD_TODO, FETCH_EDIT_TODO, FETCH_TODOS, FETCH_TOGGLE_TODO, todoReducerActions} from "./todos-reducer";


function* fetchTodos() {
    yield put(todoReducerActions.setLoadingStatusAC())
    try {
        const response = yield call(todosAPI.getAllTodos)
        if (response.status === 200) {
            yield put(todoReducerActions.setTodosAC(response.data))
        }//TODO сделать обработку статуса ответа
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        //TODO сделать шину ошибок и уведомлений
        yield put(todoReducerActions.setLoadedStatusAC())
    }
}

function* fetchToggleTodo(action: ReturnType<typeof todoReducerActions.fetchToggleTodoAC>) {
    yield put(todoReducerActions.setLoadingStatusAC())
    try {
        const response = yield call(todosAPI.toggleTodo, action.payload.id, action.payload.value)
        if (response.status===200) {
            yield put(todoReducerActions.toggleTodoAC(action.payload.id))
        }
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        yield put(todoReducerActions.setLoadedStatusAC())
    }
}
function* addTodo(action:ReturnType<typeof todoReducerActions.fetchAddTodoAC>){
    yield put(todoReducerActions.setLoadingStatusAC())
    try{
        const response=yield call(todosAPI.addTodo, action.payload.title, action.payload.userId)
        if (response.status===201) {
            yield put(todoReducerActions.addTodoAC(response.data))
        }
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        yield put(todoReducerActions.setLoadedStatusAC())
    }
}
function* editTodo(action:ReturnType<typeof todoReducerActions.fetchEditTodoAC>){
    yield put(todoReducerActions.setLoadingStatusAC())
    try{
    const response=yield call(todosAPI.editTodo, action.payload)
        if(response.status===200){
            yield put(todoReducerActions.editTodoAC(action.payload))
        }
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        yield put(todoReducerActions.setLoadedStatusAC())
    }
}
export default function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodos)
    yield takeEvery(FETCH_TOGGLE_TODO, fetchToggleTodo)
    yield takeEvery(FETCH_ADD_TODO, addTodo)
    yield takeEvery(FETCH_EDIT_TODO, editTodo)
}
