import type { SearchRepositoriesResult, SearchRepositoriesParams, ErrorType } from 'app/api';
import type { Action } from 'actions';

export const FETCH_REPOSITORIES = 'repositories/FETCH';
export const FETCH_REPOSITORIES_FULFILLED = 'repositories/FETCH_FULFILLED';
export const FETCH_REPOSITORIES_FAILED = 'repositories/FETCH_FAILED';

export type FetchAction = Action<typeof FETCH_REPOSITORIES, SearchRepositoriesParams>;
export type FulfilledAction = Action<typeof FETCH_REPOSITORIES_FULFILLED, SearchRepositoriesResult>;
export type FailedAction = Action<typeof FETCH_REPOSITORIES_FAILED, ErrorType>;

export const fetch = (payload: SearchRepositoriesParams) => ({
    type: FETCH_REPOSITORIES,
    payload,
} as FetchAction);

export const fetchFulfilled = (payload: SearchRepositoriesResult) => ({
    type: FETCH_REPOSITORIES_FULFILLED,
    payload,
} as FulfilledAction);

export const fetchFailed = (payload: ErrorType) => ({
    type: FETCH_REPOSITORIES_FAILED,
    payload,
} as FailedAction);
