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
var tab_1 = require("./tab");
var util_1 = require("../../util");
var SideMenu = (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideMenu.prototype.componentWillMount = function () {
        this.setState({
            menuHover: false
        });
    };
    SideMenu.prototype.toggleMenu = function (force) {
        this.props.toggleMenu(force);
    };
    SideMenu.prototype.toggleVRMode = function () {
        this.props.toggleVRMode();
    };
    SideMenu.prototype.navigate = function (evt, url) {
        this.props.history.push(url);
    };
    SideMenu.prototype.onMouseOver = function (evt) {
        this.setState({
            menuHover: !util_1.isMobile()
        });
    };
    SideMenu.prototype.onMouseOut = function (evt) {
        this.setState({
            menuHover: false
        });
    };
    SideMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: styles.sideMenu() },
            React.createElement("div", { style: styles.inner(), onMouseOver: function (e) { return _this.onMouseOver(e); }, onMouseOut: function (e) { return _this.onMouseOut(e); } },
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.toggleMenu(); _this.navigate(e, ""); }, image: "/data/images/convolvr2.png", buttonStyle: { backgroundSize: "100%" }, showTitle: false, compact: util_1.isMobile(), title: "Home" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/new-world"); }, showTitle: this.state.menuHover, image: "/data/images/plus.png", title: "New" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/spaces"); }, image: "/data/images/circle-a.png", showTitle: this.state.menuHover, compact: util_1.isMobile(), title: "Spaces" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/places"); }, showTitle: this.state.menuHover, image: "/data/images/places-s.png", style: styles.mobileHidden(), compact: util_1.isMobile(), title: "Places" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/inventory"); }, showTitle: this.state.menuHover, image: "/data/images/entities.png", compact: util_1.isMobile(), title: "Inventory" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/chat"); }, showTitle: this.state.menuHover, image: "/data/images/chat.png", compact: util_1.isMobile(), title: "Chat" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/files"); }, showTitle: this.state.menuHover, image: "/data/images/voxel-white.png", compact: util_1.isMobile(), title: "Data" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/network"); }, showTitle: this.state.menuHover, image: "/data/images/network.png", style: styles.mobileHidden(), compact: util_1.isMobile(), title: "Network" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/profile"); }, showTitle: this.state.menuHover, image: "/data/images/person-s2.png", compact: util_1.isMobile(), style: styles.mobileHidden(), title: "Profile" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/login"); }, showTitle: this.state.menuHover, title: "Sign In", style: styles.mobileHidden(), compact: util_1.isMobile(), image: "/data/images/logout.png" }),
                React.createElement(tab_1.Tab, { clickHandler: function (e) { _this.navigate(e, "/settings"); }, image: "/data/images/configure-h.png", showTitle: this.state.menuHover, compact: util_1.isMobile(), title: "Settings" }))));
    };
    return SideMenu;
}(react_1.Component));
exports.SideMenu = SideMenu;
var styles = {
    sideMenu: function () {
        var mobile = util_1.isMobile();
        return {
            width: mobile ? '100vw' : '72px',
            height: mobile ? '72px' : '100vh',
            backgroundColor: 'rgb(2, 0, 3)',
            overflow: 'hidden'
        };
    },
    inner: function () {
        var mobile = util_1.isMobile();
        return {
            height: mobile ? '72px' : '100vh',
            bottom: 0,
            width: mobile ? '100vw' : '72px',
            paddingTop: '7px'
        };
    },
    mobileHidden: function () {
        var mobile = util_1.isMobile();
        return {
            display: mobile ? 'none' : 'inline-block'
        };
    }
};
//# sourceMappingURL=side-menu.js.map