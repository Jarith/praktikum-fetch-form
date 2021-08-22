import React from 'react';

import type { Repository } from 'entities/repository';

import { prettifyNumber } from 'app/utils';

type StatProps = {
    icon: string;
    title: string;
    count: number;
};

const Stat = ({ icon, title, count }: StatProps) => (
    <div className='mr-4 flex'>
        <div>{icon}</div>
        <div>
            <div>{prettifyNumber(count)}</div>
            <div className='text-gray-500'>{title}</div>
        </div>
    </div>
);

type RepoCardProps = {
    card: Repository;
};

export const RepoCard = ({ card }: RepoCardProps) => (
    <div className='p-4 border border-gray-300 bg-white rounded'>
        <h2 className='text-xl mb-2'>
            <a href={card.html_url} target='_blank' rel='noreferrer'>{card.full_name}</a>
        </h2>
        <p className='mb-4 text-sm text-gray-700'>
            {card.description}
        </p>
        <div className='flex items-center text-sm'>
            <Stat icon='⭐ &nbsp;' title='stars' count={card.stargazers_count} />
            <Stat icon='🍴 &nbsp;' title='forks' count={card.forks_count} />
            <Stat icon='💳 &nbsp;' title='issues' count={card.open_issues_count} />
        </div>
    </div>
);
