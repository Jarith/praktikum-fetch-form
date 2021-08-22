import type { Repository } from 'entities/repository';
import type { SortOption } from 'app/constants';
import { API_ROUTES } from 'app/constants';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

type SearchRepositoriesParams = {
    q: string;
    sort: SortOption;
    per_page?: number;
    page?: number;
};

type SearchRepositoriesResult = {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
};

export const searchRepos = (params: SearchRepositoriesParams) => instance
    .get<SearchRepositoriesResult>(API_ROUTES.SEARCH_REPOS, { params })
    .then(({ data }) => data);
