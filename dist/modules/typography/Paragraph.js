import React from 'react';
import { useFela } from 'react-fela';
export var Paragraph = React.memo(function (_a) {
    var children = _a.children, color = _a.color, size = _a.size, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.bold, bold = _c === void 0 ? false : _c;
    var css = useFela({ color: color, size: size, bold: bold }).css;
    var compoundClassName = className + " " + css(paragraphStyle);
    return React.createElement("p", { className: compoundClassName }, children);
});
var paragraphStyle = function (_a) {
    var theme = _a.theme, color = _a.color, size = _a.size, bold = _a.bold;
    return ({
        color: color ? theme.palette[color] : theme.palette.white,
        fontStyle: 'normal',
        fontSize: getFontSize({ size: size }) + "px",
        lineHeight: getLineHeight({ size: size }) + "px",
        fontWeight: bold ? 'bold' : 'normal'
    });
};
var getFontSize = function (_a) {
    var size = _a.size;
    switch (size) {
        case 's':
            return 12;
        case 'm':
            return 15;
        case 'l':
            return 18;
        default:
            return null;
    }
};
var getLineHeight = function (_a) {
    var size = _a.size;
    switch (size) {
        case 's':
            return 16;
        case 'm':
            return 24;
        case 'l':
            return 28;
        default:
            return null;
    }
};
//# sourceMappingURL=Paragraph.js.map