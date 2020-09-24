import React from 'react';
import { StyleFunction, useFela } from 'react-fela';

export const Button: React.FC = () => {
	const { css } = useFela();

	return (
		<button className={css({ width: '20px', height: '20px' }, btnStyle)}>This text long</button>
	);
};

const btnStyle: StyleFunction<{}> = () => ({
	backgroundColor: 'red'
});
