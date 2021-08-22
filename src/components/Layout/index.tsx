import type { ReactNode } from 'react';
import React from 'react';

type LayoutProps = {
    title: string;
    children: ReactNode | ReactNode[];
}

export const Layout = ({ title, children }: LayoutProps) => (
    <div className='w-container mt-10 p-4'>
        <h1 className='text-3xl text-center mb-4'>{title}</h1>
        {children}
    </div>
);
