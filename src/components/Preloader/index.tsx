import type { ReactNode } from 'react';
import React from 'react';

type PreloaderProps = {
    isLoading: boolean;
    children: ReactNode | ReactNode[];
};

export const Preloader = ({ isLoading, children }: PreloaderProps) => {
    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return children;
};
