import React, { ChangeEvent, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useField } from 'formik';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type Option = {
    id: string;
    name: string;
};

type SelectFieldProps = {
    name: string;
    options: Option[];
    onChange?: (e: ChangeEvent) => void;
};

export const SelectField = ({ name, options, onChange }: SelectFieldProps) => {
    const [, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;

    const onValueChange = (e: ChangeEvent) => {
        if (onChange) {
            onChange(e);
        }

        setValue(e);
    };

    return (
        <Listbox value={value} onChange={onValueChange}>
            {({ open }) => (
                <Fragment>
                    <div className='mt-1 relative'>
                        <Listbox.Button
                            className='p-2 bg-white relative w-full rounded-md shadow-sm pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                        >
                            <span className='block truncate'>{value.name}</span>
                            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options
                                static
                                className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                            >
                                {options.map(option => (
                                    <Listbox.Option
                                        key={option.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9',
                                            )
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <Fragment>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {option.name}
                                                </span>
                                                {
                                                    selected
                                                        ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                )}
                                                            >
                                                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                                                            </span>
                                                        )
                                                        : null
                                                }
                                            </Fragment>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Fragment>
            )}
        </Listbox>
    );
};
