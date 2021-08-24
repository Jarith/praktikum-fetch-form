import type { Repository } from 'entities/repository';
import type { FulfilledAction } from 'actions/repositories';
import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_FAILED, FETCH_REPOSITORIES_FULFILLED } from 'actions/repositories';

export type Repositories = {
    isLoading: boolean;
    items: Repository[];
};

const initialState = {
    isLoading: false,
    items: [],
};

export const repositories = (
    state: Repositories = initialState,
    action: FulfilledAction,
) => {
    switch (action.type) {
        case FETCH_REPOSITORIES: {
            state.isLoading = true;
            break;
        }
        case FETCH_REPOSITORIES_FULFILLED: {
            state.isLoading = false;
            state.items = action.payload.items;
            break;
        }
        case FETCH_REPOSITORIES_FAILED: {
            state.isLoading = false;
            break;
        }
    }

    return state;
};
