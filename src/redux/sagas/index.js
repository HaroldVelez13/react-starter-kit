import { all } from 'redux-saga/effects';
import users from './userSaga';

export default function* rootSaga(){
    yield all([
        users()
    ]);
}