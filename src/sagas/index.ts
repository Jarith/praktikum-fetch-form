import { all, fork } from 'redux-saga/effects';
import { repositoriesSaga } from './repositories';

export function* rootSaga() {
    yield all([fork(repositoriesSaga)]);
}
