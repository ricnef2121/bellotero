//dependencies
import { takeEvery, call, put, all,takeLatest } from 'redux-saga/effects';
//consts
import {
    DATA_REQUESTED, DATA_LOADED, API_ERRORED_MENU,
    DATA_REQUESTED_REVIEW, DATA_LOADED_REVIEW,
    API_ERRORED_REVIEW,
    DATA_REQUESTED_CALCULATOR,
    DATA_LOADED_CALCULATOR,
    API_ERRORED_CALCULATOR
} from '../constants/constants-actions';
//apis
import { getData, getDataReviews,getDataCalculator } from './api';

//consumir api menu
export function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED_MENU, payload: e })
    }
}




//consumir api reviews
export function* watcherReviews() {
    yield takeEvery(DATA_REQUESTED_REVIEW, workerReview);
}

function* workerReview() {
    try {
        const payload = yield call(getDataReviews);
        yield put({ type: DATA_LOADED_REVIEW, payload });
    } catch (e) {
        yield put({ type: API_ERRORED_REVIEW, payload: e })
    }
}



//consumir api calculator
export function* watcherCalculator() {
    yield takeLatest(DATA_REQUESTED_CALCULATOR, workerCalculator);
}

function* workerCalculator() {
    try {
        const payload = yield call(getDataCalculator);
        yield put({ type: DATA_LOADED_CALCULATOR, payload });
    } catch (e) {
        yield put({ type: API_ERRORED_CALCULATOR, payload: e })
    }
}


export default function* rootSaga() {
    yield all([
        watcherSaga(),
        watcherReviews(),
        watcherCalculator()
    ])
}
