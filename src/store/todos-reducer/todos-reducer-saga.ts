import {call, put, takeLatest, takeEvery} from "redux-saga/effects"
import {todosAPI} from "../../api/todos-api";
import {FETCH_TODOS, LOADED, LOADING, SET_TODOS, setTodosActionCreator, TOGGLE_TODO} from "./todos-reducer";


function* fetchTodos() {
    yield put({type: LOADING})
    try {
        //TODO сделать обработку статуса ответа?
        const data = yield call(todosAPI.getAllTodos)
        // yield put({type: SET_TODOS, payload:data.data})
        yield put(setTodosActionCreator(data.data))
    } catch (e) {
        //TODO сделать шину ошибок и уведомлений
    } finally {
        yield put({type: LOADED})
    }
}
function* fetchToggleTodo(action:any){
    try{
        const response=yield call(todosAPI.toggleTodo, action.payload)
        console.log(response)
    }catch (e) {

    }finally {

    }
}
export default function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodos)
    yield takeEvery(TOGGLE_TODO, fetchToggleTodo)
}
