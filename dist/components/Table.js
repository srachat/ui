import { __assign } from "tslib";
import { createComponent } from 'react-fela';
var style = function (_a) {
    var striped = _a.striped, bordered = _a.bordered, borderless = _a.borderless, hoverable = _a.hoverable;
    var border = borderless ? 'inherit' : "1px solid #B4BEC8";
    var cell = {
        height: 32,
        padding: '4px 8px',
        verticalAlign: 'top',
        borderTop: border,
        borderLeft: bordered ? border : 'inherit',
        borderBottom: bordered ? border : 'inherit',
        borderRight: bordered ? border : 'inherit'
    };
    return __assign(__assign(__assign({ width: '100%', '& th': cell, '& td': cell, '& thead th': {
            verticalAlign: 'bottom',
            borderBottom: borderless ? 'inherit' : "2px solid #B4BEC8"
        } }, ((striped && {
        '& tbody tr:nth-of-type(odd)': {
            backgroundColor: '#D6DADE'
        }
    }) ||
        {})), ((bordered && {
        border: "1px solid #B4BEC8"
    }) ||
        {})), ((hoverable && {
        '& tbody tr:hover': {
            backgroundColor: '#D6DADE'
        }
    }) ||
        {}));
};
export var Table = createComponent(style, 'table');
//# sourceMappingURL=Table.js.map