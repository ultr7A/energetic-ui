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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var button_1 = require("../button/button");
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultProps = {
            title: "Menu Item"
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "menu-item", title: this.props.title, onClick: function (evt) { _this.props.onClick(evt, _this.props.title); } },
            React.createElement("span", null, this.props.title),
            React.createElement(button_1.Button, { title: this.props.title, onClick: function (evt, title) { _this.props.onClick(evt); }, image: this.props.image, style: { marginRight: "0.25em" } })));
    };
    return MenuItem;
}(react_1.Component));
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.js.map