import {call, put, takeLatest, takeEvery} from "redux-saga/effects"
import {todosAPI} from "../../api/todos-api";
import {SET_ERROR} from "../app-reducer/app-reducer";
import {
    FETCH_TODOS,
    FETCH_TOGGLE_TODO,
    LOADED,
    LOADING,
    setTodosActionCreator,
    TOGGLE_TODO
} from "./todos-reducer";


function* fetchTodos() {
    yield put({type: LOADING})
    try {

        const response = yield call(todosAPI.getAllTodos)
        console.log(response)
        if (response.status === 200) {
            yield put(setTodosActionCreator(response.data))
        }//TODO сделать обработку статуса ответа
    } catch (e) {
        yield put({type: SET_ERROR, payload: e.message})
    } finally {
        //TODO сделать шину ошибок и уведомлений
        yield put({type: LOADED})
    }
}

function* fetchToggleTodo(action: any) {
    yield put({type: LOADING})
    try {
        const response = yield call(todosAPI.toggleTodo, action.payload.id, action.payload.value)
        if (response.status===200) {
            yield put({type: TOGGLE_TODO, payload: action.payload.id})
        }
    } catch (e) {
        yield put({type: SET_ERROR, payload: e.message})
    } finally {
        yield put({type: LOADED})
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodos)
    yield takeEvery(FETCH_TOGGLE_TODO, fetchToggleTodo)
}
