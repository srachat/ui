var allStyles = [];
export var renderStaticStyles = function (renderer, styles) {
    var kyes = Object.keys(styles);
    for (var _i = 0, kyes_1 = kyes; _i < kyes_1.length; _i++) {
        var key = kyes_1[_i];
        renderer.renderStatic(styles[key], key);
    }
};
export function renderAllStaticStyles(renderer) {
    for (var _i = 0, allStyles_1 = allStyles; _i < allStyles_1.length; _i++) {
        var styles = allStyles_1[_i];
        renderStaticStyles(renderer, styles);
    }
}
//# sourceMappingURL=index.js.map