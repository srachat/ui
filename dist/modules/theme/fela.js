import { __spreadArrays } from "tslib";
import { createRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import embedded from 'fela-plugin-embedded';
import { renderAllStaticStyles } from './static-styles';
function configureFela() {
    var renderer = createRenderer({
        selectorPrefix: 'ft_',
        plugins: __spreadArrays(webPreset, [embedded()]),
        mediaQueryOrder: [
            'screen and (max-width: 1440px)',
            'screen and (max-width: 768px)'
        ]
    });
    renderAllStaticStyles(renderer);
    renderer.renderStatic({
        fontFamily: '"Segoe UI", "SF Optimized", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", "Roboto", sans-serif'
    }, 'body, #app button, #app input, #app optgroup, #app select, #app textarea');
    renderer.renderStatic({
        cursor: 'pointer'
    }, '.curp');
    renderer.renderStatic({
        cursor: 'text'
    }, '.curt');
    renderer.renderStatic({
        cursor: 'not-allowed'
    }, '.curn');
    renderer.renderStatic({
        pointerEvents: 'none'
    }, '.disabled');
    renderer.renderStatic({
        width: 'auto !important'
    }, '.w-auto');
    return renderer;
}
export var felaRenderer = configureFela();
//# sourceMappingURL=fela.js.map