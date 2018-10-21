"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = function (r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
};
exports.rgba = function (r, g, b, a) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
};
exports.isMobile = function () {
    var ratio = window.devicePixelRatio, width = window.innerWidth;
    if (ratio >= 2.5) {
        return width < window.innerHeight;
    }
    else {
        return width <= 480 || ratio >= 1.25 && width <= 720;
    }
};
//# sourceMappingURL=util.js.map