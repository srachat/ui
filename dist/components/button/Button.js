import React from 'react';
import { useFela } from 'react-fela';
export var Button = function () {
    var css = useFela().css;
    return (React.createElement("button", { className: css({ width: '20px', height: '20px' }, btnStyle) }, "This text long"));
};
var btnStyle = function () { return ({
    backgroundColor: 'red'
}); };
//# sourceMappingURL=Button.js.map