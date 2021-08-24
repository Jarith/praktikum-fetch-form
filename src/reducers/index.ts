import type { Immutable } from 'immer';
import { combineReducers } from 'redux-immer';
import produce from 'immer';

import type { Repositories } from './repositories';
import { repositories } from './repositories';

export type State = Immutable<{
    repositories: Repositories;
}>;

export const rootReducer = combineReducers(produce, {
    repositories,
});
