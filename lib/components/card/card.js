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
var context_menu_1 = require("./context-menu");
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.componentWillMount = function () {
        this.setState({
            isHovering: false
        });
    };
    Card.prototype.handleContextAction = function (name, e) {
        var data = {};
        if (name == "Rename" || name == "Edit" || name == "Delete") {
            data.filename = this.props.title;
            data.username = this.props.username;
        }
        if (!this.props.onContextMenu) {
            return;
        }
        if (name == "Delete") {
            if (confirm("Delete " + data.filename + "?")) {
                this.props.onContextMenu(name, data, e);
            }
            else {
                this.props.onContextMenu("", {}, {});
            }
        }
        else {
            this.props.onContextMenu(name, data, e);
        }
    };
    Card.prototype.handleCardClick = function (evt) {
        var elemClass = evt.target && evt.target.getAttribute("class");
        if (elemClass == "ui-card-outer" || elemClass == "ui-card-title")
            this.props.clickHandler(evt, this.props.title);
    };
    Card.prototype.onMouseEnter = function (evt) {
        this.setState({
            isHovering: true
        });
    };
    Card.prototype.onMouseLeave = function (evt) {
        this.setState({
            isHovering: false
        });
    };
    Card.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: styles.card(this.props.image + "", this.props.color, !!this.props.compact, !!this.props.quarterSize), onClick: function (evt) { return _this.handleCardClick(evt); }, onMouseMove: function (evt) { return _this.onMouseEnter(evt); }, onMouseLeave: function (evt) { return _this.onMouseLeave(evt); }, title: this.props.title, className: "ui-card-outer" },
            (!!this.props.showTitle ? (React.createElement("span", { style: styles.title(this.props.image + "", !!this.props.quarterSize), className: "ui-card-title" }, this.props.title)) : ""),
            this.props.onContextMenu ? (React.createElement(context_menu_1.default, { options: this.props.contextMenuOptions, onAction: function (name, e) { return _this.handleContextAction(name, e); }, compact: !!this.props.compact, title: this.props.title + "", isHovering: !!this.state.isHovering, isImage: this.props.image != "", username: this.props.username + "", category: this.props.category + "", dir: this.props.dir + "" })) : '',
            this.props.description != "" ? (React.createElement("div", { style: styles.description(!!this.props.compact) }, this.props.description)) : ""));
    };
    return Card;
}(react_1.Component));
exports.default = Card;
var styles = {
    card: function (image, color, compact, quarterSize) {
        return {
            borderRadius: '2.5px',
            boxShadow: '0 0.25em 0.5em 0px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            width: quarterSize ? '120px' : '240px',
            height: quarterSize ? '120px' : (compact ? '60px' : '240px'),
            display: 'inline-block',
            marginRight: '0.5em',
            marginBottom: '0.5em',
            backgroundColor: 'rgba(255,255,255, 0.2)',
            backgroundSize: 'cover',
            backgroundImage: "url(" + image + ")",
            textAlign: "center",
            verticalAlign: "top",
        };
    },
    description: function (compact) {
        return {
            opacity: 0.8
        };
    },
    title: function (image, quarterSize) {
        return {
            width: '100%',
            fontSize: quarterSize ? '12px' : '16px',
            textShadow: quarterSize || image != '' ? 'rgba(0, 0, 0, 0.33) 1px 1px 1px' : 'none',
            height: '32px',
            paddingTop: '8px',
            display: 'block',
            wordBreak: 'break-word',
            backgroundColor: quarterSize || image != '' ? 'transparent' : 'rgba(0,0,0,0.2)'
        };
    }
};
//# sourceMappingURL=card.js.map