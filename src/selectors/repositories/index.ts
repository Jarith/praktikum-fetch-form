import type { State } from 'reducers';

const getRepositories = (state: State) => state.repositories;

export const getRepositoriesCards = (state: State) => getRepositories(state).items;
export const getIsRepositoriesLoading = (state: State) => getRepositories(state).isLoading;
