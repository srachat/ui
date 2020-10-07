import { __assign, __rest } from "tslib";
import React from 'react';
import { useFela } from 'react-fela';
export var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var css = useFela().css;
    return (React.createElement("button", __assign({ className: css({ width: 'auto', height: '20px' }, btnStyle) }, props), children));
};
var btnStyle = function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.colors.mainActive
    });
};
//# sourceMappingURL=Button.js.map