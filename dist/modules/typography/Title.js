import { __assign } from "tslib";
import React from 'react';
import { useFela } from 'react-fela';
export var Title = React.memo(function (_a) {
    var size = _a.size, children = _a.children, color = _a.color, _b = _a.className, className = _b === void 0 ? '' : _b;
    var css = useFela({ color: color, size: size }).css;
    var compoundClassName = className + " " + css(titleStyle);
    switch (size) {
        case 1:
            return React.createElement("h1", { className: compoundClassName }, children);
        case 2:
            return React.createElement("h2", { className: compoundClassName }, children);
        case 3:
            return React.createElement("h3", { className: compoundClassName }, children);
        case 4:
            return React.createElement("h4", { className: compoundClassName }, children);
        case 5:
            return React.createElement("h5", { className: compoundClassName }, children);
        case 6:
            return React.createElement("h6", { className: compoundClassName }, children);
        default:
            return null;
    }
});
var titleStyle = function (_a) {
    var theme = _a.theme, color = _a.color, size = _a.size;
    return (__assign({ color: color ? theme.palette[color] : theme.palette.white, fontStyle: 'normal', fontSize: getFontSize({ size: size }) + "px", lineHeight: getLineHeight({ size: size }) + "px" }, (size === 6
        ? {
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: 500
        }
        : {})));
};
var getFontSize = function (_a) {
    var size = _a.size;
    switch (size) {
        case 1:
            return 44;
        case 2:
            return 36;
        case 3:
            return 30;
        case 4:
            return 25;
        case 5:
            return 20;
        case 6:
            return 12;
        default:
            return null;
    }
};
var getLineHeight = function (_a) {
    var size = _a.size;
    switch (size) {
        case 1:
            return 60;
        case 2:
            return 48;
        case 3:
            return 40;
        case 4:
            return 36;
        case 5:
            return 28;
        case 6:
            return 16;
        default:
            return null;
    }
};
//# sourceMappingURL=Title.js.map