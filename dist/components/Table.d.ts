/// <reference types="react" />
export declare type TableProps = {
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    borderless?: boolean;
};
export declare const Table: import("react").ComponentType<TableProps & import("react-fela").FelaInjectedProps<TableProps, any> & import("react").HTMLProps<HTMLTableElement>>;
