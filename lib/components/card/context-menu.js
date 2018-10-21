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
var button_1 = require("../button/button");
var ContextMenu = (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenu.prototype.componentWillMount = function () {
        this.setState({
            activated: false
        });
    };
    ContextMenu.prototype.toggle = function () {
        this.setState({
            activated: !this.state.activated
        });
    };
    ContextMenu.prototype.handleContextAction = function (action, evt) {
        if (this.props.onAction)
            this.props.onAction(action, evt);
        this.toggle();
    };
    ContextMenu.prototype.render = function () {
        var _this = this;
        var username = this.props.username, dir = this.props.dir, numberOfOptions = this.props.options.length, nonEntity = this.props.category && this.props.category == "Properties" || this.props.category == "Components";
        if (this.state.activated) {
            return (React.createElement("div", { style: styles.card(this.props.color, this.props.compact), title: this.props.title },
                (this.props.showTitle ? (React.createElement("span", { style: styles.title }, this.props.title)) : ""),
                React.createElement(button_1.Button, { style: styles.button(this.props.compact, "", true), image: "/data/images/x.png", onClick: function (e) { return _this.toggle(); }, title: "Close" }),
                React.createElement("div", { style: styles.options }, this.props.options.map(function (opt, i) {
                    if (nonEntity && opt.name == "Add To Space")
                        return "";
                    return (React.createElement("div", { onClick: function (e) { return _this.handleContextAction(opt.name, e); }, style: __assign({}, styles.option, { borderBottom: i < numberOfOptions - 1 ? styles.option.borderBottom : 'none' }), key: i }, opt.name == "Download" ? (React.createElement("a", { title: _this.props.title, style: styles.link, target: "_blank", href: "/data/user/" + username + dir + "/" + _this.props.title }, "Download")) : opt.name));
                }))));
        }
        else {
            return (React.createElement(button_1.Button, { image: "/data/images/configure.png", title: "File Options", onClick: function (e) { return _this.toggle(); }, style: styles.button(this.props.compact, "", false, this.props.isHovering) }));
        }
    };
    ContextMenu.defaultProps = {
        title: "File Options",
        dir: "",
        username: "",
        showTitle: false,
        isHovering: false,
        color: '#252525',
        compact: false,
        isImage: false,
        options: [
            { name: "Download" },
            { name: "Edit" },
            { name: "Delete" },
        ]
    };
    return ContextMenu;
}(react_1.Component));
exports.ContextMenu = ContextMenu;
var styles = {
    card: function (color, compact) {
        return {
            position: 'relative',
            cursor: 'pointer',
            width: '224px',
            height: '220px',
            display: 'inline-block',
            marginRight: '0.5em',
            marginLeft: '8px',
            marginBottom: '0.5em',
            backgroundColor: 'rgb(203, 203, 203)',
            textAlign: "center",
            borderRadius: "5px",
            color: "black",
            boxShadow: "rgba(0, 0, 0, 0.7) 1px 0.35em 1.2em",
            fontWeight: "600",
            border: "1px rgba(77, 77, 77, 0.64) solid"
        };
    },
    link: {
        color: "#008523",
        textDecoration: 'none'
    },
    option: {
        textAlign: 'left',
        paddingLeft: '0.8em',
        paddingBottom: '0.2em',
        borderBottom: '0.2em #bbbbbb solid'
    },
    options: {
        paddingTop: '0.4em',
        fontSize: '17px'
    },
    button: function (compact, image, close, isHovering) {
        return {
            position: 'relative',
            top: compact ? '-50px' : close ? '-50px' : '-48px',
            right: close ? '-16px' : '-104px',
            opacity: isHovering ? (close ? 1 : image ? 0.5 : 0.33) : 0,
            float: close ? 'right' : 'none'
        };
    },
    title: {
        width: '100%',
        height: '40px',
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
};
//# sourceMappingURL=context-menu.js.map