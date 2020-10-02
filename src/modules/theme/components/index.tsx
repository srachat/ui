import * as React from 'react';
import { felaRenderer } from '../fela';
import { RendererProvider as Fela, ThemeProvider as FelaTheme } from 'react-fela';
import { srachatTheme } from '../theme';

export const ThemeProvider: React.FC = ({ children }) => (
  <Fela renderer={felaRenderer}>
    <FelaTheme theme={srachatTheme}>{children}</FelaTheme>
  </Fela>
);
