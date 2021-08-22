export const API_ROUTES = {
    SEARCH_REPOS: '/search/repositories',
} as const;

export type ApiRoute = typeof API_ROUTES[keyof typeof API_ROUTES];

export const SORT_OPTIONS = {
    STARS: 'stars',
    FORKS: 'forks',
    UPDATED: 'updated',
} as const;

export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];

export const FIELD_NAMES = {
    SEARCH: 'search',
    SORT: 'sort',
} as const;

export const SORT_OPTIONS_NAMES = {
    [SORT_OPTIONS.STARS]: `⭐ Stars`,
    [SORT_OPTIONS.FORKS]: '🍴 Forks',
    [SORT_OPTIONS.UPDATED]: '🕒 Last updated',
} as const;

export type SortOptionName = typeof SORT_OPTIONS_NAMES[keyof typeof SORT_OPTIONS_NAMES];

export const SEARCH_FORM_INITIAL_VALUES = {
    [FIELD_NAMES.SEARCH]: '',
    [FIELD_NAMES.SORT]: {
        id: SORT_OPTIONS.STARS,
        name: SORT_OPTIONS_NAMES[SORT_OPTIONS.STARS],
    },
};
