import type { ChangeEvent } from 'react';
import React from 'react';
import { SORT_OPTIONS, SORT_OPTIONS_NAMES } from 'app/constants';

import { SelectField } from 'components/SelectField';

const options = [
    { id: SORT_OPTIONS.STARS, name: SORT_OPTIONS_NAMES[SORT_OPTIONS.STARS] },
    { id: SORT_OPTIONS.FORKS, name: SORT_OPTIONS_NAMES[SORT_OPTIONS.FORKS] },
    { id: SORT_OPTIONS.UPDATED, name: SORT_OPTIONS_NAMES[SORT_OPTIONS.UPDATED] },
];

type SortFilterProps = {
    name: string;
    onChange: (e: ChangeEvent) => void;
};

export const SortFilter = ({ name, onChange }: SortFilterProps) => (
    <div className='w-48'>
        <SelectField name={name} options={options} onChange={onChange} />
    </div>
);
