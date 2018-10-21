"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var styles_1 = require("../../styles");
var styles = {
    button: styles_1.fileButtonStyle
};
var FileButton = (function (_super) {
    __extends(FileButton, _super);
    function FileButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: __assign({}, styles.button, this.props.style), onClick: function (evt) {
                _this.props.onClick && _this.props.onClick(evt, _this.props.title);
            }, title: this.props.title }, this.props.title));
    };
    return FileButton;
}(react_1.Component));
exports.default = FileButton;
//# sourceMappingURL=file-button.js.map