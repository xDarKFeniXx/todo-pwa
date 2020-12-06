import {call, put, takeLatest} from "redux-saga/effects"

import {appReducerActions} from "../app-reducer/app-reducer";
import {FETCH_USERS, usersReducerActions} from "./users-reducer";
import {userAPI} from "../../api/users-api";
import {APIResponseType, UserI} from "../types";


function* fetchUsers(){
    yield put(usersReducerActions.setLoadingAC())
    try {
        const response: APIResponseType<Array<UserI>> =yield call(userAPI.fetchUsers)
        if (response.status === 200) {
            yield put(usersReducerActions.setUsersAC(response.data))
        }//TODO сделать обработку статуса ответа
    } catch (e) {
        yield put(appReducerActions.setGlobalError(e.message))
    } finally {
        //TODO сделать шину ошибок и уведомлений
        yield put(usersReducerActions.setLoadedAC())
    }

}
export default function* usersSaga(){
    yield takeLatest(FETCH_USERS, fetchUsers)
}
