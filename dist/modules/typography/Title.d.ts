import React from 'react';
import { SrachatPalette } from '../theme';
declare type Props = {
    size: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
    color?: keyof SrachatPalette;
    className?: string;
};
export declare const Title: React.NamedExoticComponent<Props>;
export {};
