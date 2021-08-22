import React, { Fragment, useState } from 'react';

import type { SortOption, SortOptionName } from 'app/constants';
import type { Repository } from 'entities/repository';
import { Formik, Form, useFormikContext } from 'formik';
import { Layout } from 'components/Layout';
import { SEARCH_FORM_INITIAL_VALUES, FIELD_NAMES } from 'app/constants';
import { searchRepos } from 'app/api';
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
};

const SearchForm = ({ cards }: SearchFormTypes) => {
    const { submitForm } = useFormikContext();

    return (
        <Fragment>
            <Form className='flex items-center'>
                <SearchField name={FIELD_NAMES.SEARCH} placeholder='Search query...' onChange={submitForm} />
                <SortFilter name={FIELD_NAMES.SORT} onChange={submitForm} />
            </Form>
            <ul>
                {
                    cards.map(card => (
                        <li key={card.id} className='mt-4'>
                            <RepoCard card={card} />
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export const Search = () => {
    const [cards, setCards] = useState<Repository[]>([]);

    const onSubmit = async (values: SearchFormValues) => {
        const search = values[FIELD_NAMES.SEARCH];
        const { id: sort } = values[FIELD_NAMES.SORT];

        try {
            const { items } = await searchRepos({
                q: search,
                sort,
            });

            setCards(items);
        } catch (e) {
        }
    };

    return (
        <Layout title='Github repositories search'>
            <Formik initialValues={SEARCH_FORM_INITIAL_VALUES} onSubmit={onSubmit}>
                <SearchForm cards={cards} />
            </Formik>
        </Layout>
    );
};
