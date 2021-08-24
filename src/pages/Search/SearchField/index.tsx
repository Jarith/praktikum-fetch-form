import type { ChangeEvent } from 'react';
import React from 'react';
import { useField } from 'formik';

import { SearchIcon } from '@heroicons/react/solid';

type SearchFieldProps = {
    name: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
};

export const SearchField = ({ name, placeholder, onChange }: SearchFieldProps) => {
    const [field] = useField(name);

    const onValueChange = (e: ChangeEvent) => {
        if (onChange) {
            onChange(e);
        }

        field.onChange(e);
    };

    return (
        <div className='flex-1 mt-1 mr-2 relative rounded-md shadow-sm'>
            <input
                value={field.value}
                onBlur={field.onBlur}
                name={field.name}
                onChange={onValueChange}
                type='text'
                placeholder={placeholder}
                className='block w-full pr-10 text-gray-900 placeholder-gray-300 p-2 outline-none rounded-md'
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
            </div>
        </div>
    );
};
