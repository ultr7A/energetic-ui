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
;
var button_1 = require("../button/button");
var util_1 = require("../../util");
var styles_1 = require("../../styles");
var styles = {
    tab: styles_1.tabStyle,
    title: function () { return styles_1.tabTitleStyle(util_1.isMobile()); },
    visible: {
        opacity: 1,
        height: '20px'
    }
};
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tab, "defaultProps", {
        get: function () {
            return {
                title: "Menu Item",
                showTitle: false,
                compact: false
            };
        },
        enumerable: true,
        configurable: true
    });
    Tab.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: __assign({}, styles.tab(this.props.compact), this.props.style), title: this.props.title, onClick: function (evt) { _this.props.clickHandler(evt, _this.props.title); } },
            React.createElement(button_1.Button, { title: this.props.title, innerStyle: this.props.buttonStyle, image: this.props.image, compact: this.props.compact }),
            React.createElement("span", { style: this.props.showTitle ? __assign({}, styles.title(), styles.visible) : styles.title() }, this.props.title)));
    };
    return Tab;
}(react_1.Component));
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map