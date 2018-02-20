import { takeEvery } from "redux-saga/effects";
import fetchWeatherSaga from "./fetchWeatherSaga";
import { FETCH_WEATHER } from "../actions/actionTypes";

function* mySaga() {
  yield takeEvery(FETCH_WEATHER, fetchWeatherSaga);
}

export default mySaga;
