import { all } from "redux-saga/effects"

function* testApp(){
    yield console.log('todos saga')
}
export default function* appSaga(){
    yield all([testApp()])
}
