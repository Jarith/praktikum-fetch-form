import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import type { State } from 'reducers';
import type { SortOption, SortOptionName } from 'app/constants';
import type { Repository } from 'entities/repository';
import { Formik, Form, useFormikContext } from 'formik';
import { Layout } from 'components/Layout';
import { Preloader } from 'components/Preloader';
import { SEARCH_FORM_INITIAL_VALUES, FIELD_NAMES } from 'app/constants';
import { fetch } from 'actions/repositories';
import { getIsRepositoriesLoading, getRepositoriesCards } from 'selectors/repositories';
import { SearchField } from './SearchField';
import { SortFilter } from './SortFilter';
import { RepoCard } from './RepoCard';

type SearchFormValues = {
    [FIELD_NAMES.SEARCH]: string,
    [FIELD_NAMES.SORT]: {
        id: SortOption;
        name: SortOptionName;
    },
};

type SearchFormTypes = {
    cards: Repository[];
    isLoading: boolean;
};

const SearchForm = ({ cards, isLoading }: SearchFormTypes) => {
    const { submitForm } = useFormikContext();

    return (
        <Fragment>
            <Form className='flex items-center'>
                <SearchField name={FIELD_NAMES.SEARCH} placeholder='Search query...' onChange={submitForm} />
                <SortFilter name={FIELD_NAMES.SORT} onChange={submitForm} />
            </Form>
            <Preloader isLoading={isLoading}>
                <ul>
                    {
                        cards.map(card => (
                            <li key={card.id} className='mt-4'>
                                <RepoCard card={card} />
                            </li>
                        ))
                    }
                </ul>
            </Preloader>
        </Fragment>
    );
};

type ComponentProps = SearchFormTypes & {
    fetch: typeof fetch;
};

const Component = ({ cards, isLoading, fetch }: ComponentProps) => {
    const onSubmit = async (values: SearchFormValues) => {
        const search = values[FIELD_NAMES.SEARCH];
        const { id: sort } = values[FIELD_NAMES.SORT];

        fetch({ q: search, sort });
    };

    return (
        <Layout title='Github repositories search'>
            <Formik initialValues={SEARCH_FORM_INITIAL_VALUES} onSubmit={onSubmit}>
                <SearchForm cards={cards} isLoading={isLoading} />
            </Formik>
        </Layout>
    );
};

const mapStateToProps = (state: State) => ({
    cards: getRepositoriesCards(state),
    isLoading: getIsRepositoriesLoading(state),
});

export const Search = connect(mapStateToProps, { fetch })(Component);
