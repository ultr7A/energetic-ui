"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var styles_1 = require("../../styles");
var styles = {
    button: styles_1.buttonStyle,
    inner: styles_1.buttonInnerStyle,
    file: styles_1.buttonFileStyle
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Button, "defaultProps", {
        get: function () {
            return {
                title: "Button",
                style: false,
                compact: false
            };
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.render = function () {
        var _this = this;
        var compact = this.props.compact, innerStyle = this.props.innerStyle != false ? __assign({}, styles.inner(compact), this.props.innerStyle) : styles.inner(compact), style = this.props.style != false ? __assign({}, styles.button(compact), this.props.style) : styles.button(compact);
        innerStyle.backgroundImage = 'url(' + (this.props.image != null ? this.props.image : "") + ')';
        return (React.createElement("div", { style: style, className: "ui-button" },
            React.createElement("div", { style: innerStyle, title: this.props.title, onClick: function (evt) {
                    _this.props.onClick && _this.props.onClick(evt, _this.props.title);
                } }, !!this.props.onFiles ? (React.createElement("input", { type: "file", multiple: true, onChange: function (e) { _this.props.onFiles && _this.props.onFiles(e.target.files); }, style: styles.file() })) : "")));
    };
    return Button;
}(react_1.Component));
exports.default = Button;
//# sourceMappingURL=button.js.map