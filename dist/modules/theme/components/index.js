import * as React from 'react';
import { felaRenderer } from '../fela';
import { RendererProvider as Fela, ThemeProvider as FelaTheme } from 'react-fela';
import { srachatTheme } from '../theme';
export var ThemeProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(Fela, { renderer: felaRenderer },
        React.createElement(FelaTheme, { theme: srachatTheme }, children)));
};
//# sourceMappingURL=index.js.map