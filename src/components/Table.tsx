import { createComponent, Style } from 'react-fela';

export type TableProps = {
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
	borderless?: boolean;
};

const style: Style<TableProps> = ({ striped, bordered, borderless, hoverable }) => {
	const border = borderless ? 'inherit' : `1px solid #B4BEC8`;
	const cell = {
		height: 32,
		padding: '4px 8px',
		verticalAlign: 'top',

		borderTop: border,
		borderLeft: bordered ? border : 'inherit',
		borderBottom: bordered ? border : 'inherit',
		borderRight: bordered ? border : 'inherit'
	};

	return {
		width: '100%',
		'& th': cell,
		'& td': cell,
		'& thead th': {
			verticalAlign: 'bottom',
			borderBottom: borderless ? 'inherit' : `2px solid #B4BEC8`
		},

		...((striped && {
			'& tbody tr:nth-of-type(odd)': {
				backgroundColor: '#D6DADE'
			}
		}) ||
			{}),

		...((bordered && {
			border: `1px solid #B4BEC8`
		}) ||
			{}),

		...((hoverable && {
			'& tbody tr:hover': {
				backgroundColor: '#D6DADE'
			}
		}) ||
			{})
	};
};

export const Table = createComponent<TableProps>(style, 'table');
