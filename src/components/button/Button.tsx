import React from 'react';
import { StyleFunction, useFela } from 'react-fela';

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { css } = useFela();

  return (
    <button className={css({ width: 'auto', height: '20px' }, btnStyle)} {...props}>
      {children}
    </button>
  );
};

const btnStyle: StyleFunction<{}> = () => ({
  backgroundColor: 'red'
});
