import {call, put, takeLatest} from "redux-saga/effects"

import {SET_ERROR} from "../app-reducer/app-reducer";
import {FETCH_USERS, LOADED, LOADING, SET_USERS} from "./users-reducer";
import {userAPI} from "../../api/users-api";


function* fetchUsers(){
    yield put({type: LOADING})
    try {

        const response = yield call(userAPI.fetchUsers)
        if (response.status === 200) {
            yield put({type:SET_USERS, payload:response.data})
        }//TODO сделать обработку статуса ответа
    } catch (e) {
        yield put({type: SET_ERROR, payload: e.message})
    } finally {
        //TODO сделать шину ошибок и уведомлений
        yield put({type: LOADED})
    }

}
export default function* usersSaga(){
    yield takeLatest(FETCH_USERS, fetchUsers)
}
