import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_USERS,
  SUCCESS_GET_USERS,
  GET_USER,
  SUCCESS_GET_USER,
  LAST_REQUEST_SUCCESS,
} from "../actionsType/userActionsType";

import apiCall from "../api";

function getNowStr() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const last = today.toUTCString();
  return last;
}
function* getUsers({ payload }) {
  try {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const results = yield call(apiCall, "get", url);
    const last = yield call(getNowStr);

    yield put({
      type: SUCCESS_GET_USERS,
      payload: results,
    });
    yield put({
      type: LAST_REQUEST_SUCCESS,
      payload: last,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getUser({ payload }) {
    try {
      const url = "https://jsonplaceholder.typicode.com/users/"+payload;
      const result = yield call(apiCall, "get", url);
  
      yield put({
        type: SUCCESS_GET_USER,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  }



//watchers
export default function* users() {
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(GET_USER, getUser);
}
