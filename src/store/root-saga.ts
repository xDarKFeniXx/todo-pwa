import {all} from 'redux-saga/effects'

function* testSaga(){
    yield console.log('hello from saga')
}

export default function* rootSaga(){
    yield all([
        testSaga(),
    ])
}
