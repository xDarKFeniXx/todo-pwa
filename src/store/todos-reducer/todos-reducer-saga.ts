import {call, put, takeEvery, takeLatest, select} from "redux-saga/effects"
import {todosAPI} from "../../api/todos-api";
import {appReducerActions} from "../app-reducer/app-reducer";
import {FETCH_ADD_TODO, FETCH_EDIT_TODO, FETCH_TODOS, FETCH_TOGGLE_TODO, todoReducerActions} from "./todos-reducer";
import {HttpStatusCode} from "../types";
import { pageSizeSelector } from "./todos-reducer-selectors";


function* fetchTodos(action:ReturnType<typeof todoReducerActions.fetchTodosAC>) {
    const pageSize=yield select(pageSizeSelector)
    yield put(todoReducerActions.setLoadingStatusAC())
    try {
        const response = yield call(todosAPI.getAllTodos, action.payload, pageSize)
        console.log(response)
        if (response.status === HttpStatusCode.OK) {
            yield put(todoReducerActions.setTodosAC(response.data, +response.headers['x-total-count']))
        }// TODO сделать обработку статуса ответа
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        // TODO сделать шину ошибок и уведомлений
        yield put(todoReducerActions.setLoadedStatusAC())
    }
}

function* fetchToggleTodo(action: ReturnType<typeof todoReducerActions.fetchToggleTodoAC>) {
    yield put(todoReducerActions.setLoadingStatusAC())
    try {
        const response = yield call(todosAPI.toggleTodo, action.payload.id, action.payload.value)
        if (response.status===HttpStatusCode.OK) {
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
        if (response.status===HttpStatusCode.CREATED) {
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
        if(response.status===HttpStatusCode.OK){
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
