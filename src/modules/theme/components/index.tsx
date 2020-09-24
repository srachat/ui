import * as React from 'react';
import { felaRenderer } from '../fela';
import { RendererProvider as Fela, ThemeProvider as FelaTheme } from 'react-fela';

// TODO: Create theme

export const ThemeProvider: React.FC = ({ children }) => (
	<Fela renderer={felaRenderer}>
		<FelaTheme theme={{}}>{children}</FelaTheme>
	</Fela>
);
