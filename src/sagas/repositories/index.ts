import type { FetchAction } from 'actions/repositories';
import { searchRepos } from 'app/api';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchFailed, fetchFulfilled, FETCH_REPOSITORIES } from 'actions/repositories';

export function* fetchRepositories({ payload }: FetchAction) {
    yield delay(300);

    try {
        // @ts-expect-error redux-saga types
        const repositories = yield call(searchRepos, payload);
        yield put(fetchFulfilled(repositories));
    } catch (e) {
        yield put(fetchFailed(e));
    }
}

export function* repositoriesSaga() {
    yield takeLatest(FETCH_REPOSITORIES, fetchRepositories);
}
