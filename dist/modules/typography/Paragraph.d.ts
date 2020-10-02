import React from 'react';
import { SrachatPalette } from '../theme';
declare type Props = {
    size: 's' | 'm' | 'l';
    children?: React.ReactNode;
    color?: keyof SrachatPalette;
    className?: string;
    bold?: boolean;
};
export declare const Paragraph: React.NamedExoticComponent<Props>;
export {};
