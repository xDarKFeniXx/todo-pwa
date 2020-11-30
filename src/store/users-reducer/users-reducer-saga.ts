import { all } from "redux-saga/effects"

function* testUsers(){
    yield console.log('todos saga')
}
export default function* usersSaga(){
    yield all([testUsers()])
}
