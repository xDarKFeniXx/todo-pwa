import {all} from 'redux-saga/effects'
import appSaga from "./app-reducer/app-reducer-saga";
import usersSaga from "./users-reducer/users-reducer-saga";
import todoSaga from "./todos-reducer/todos-reducer-saga";

function* testSaga(){
    yield console.log('hello from saga')
}

export default function* rootSaga(){
    yield all([
        testSaga(),
        appSaga(),
        usersSaga(),
        todoSaga()
    ])
}
