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
var file_button_1 = require("../components/button/file-button");
var util_1 = require("../util");
var styles_1 = require("../styles");
var util_2 = require("../util");
var SharingSettings = (function (_super) {
    __extends(SharingSettings, _super);
    function SharingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SharingSettings.prototype.componentWillMount = function () {
        this.setState({
            activated: false,
            editMode: false,
            text: "",
            name: "",
            data: {},
            id: 0
        });
        this.props.listShares(this.props.username);
    };
    SharingSettings.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.sharesFetching && nextProps.sharesFetching == false && !!nextProps.readText) {
            this.setState({
                text: nextProps.readText
            });
        }
        if (this.props.activated == false && nextProps.activated == true) {
            this.setState({
                activated: true
            });
        }
    };
    SharingSettings.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    SharingSettings.prototype.handleTextChange = function (e) {
        this.setState({
            name: e.target.value
        });
    };
    SharingSettings.prototype.remove = function (index) {
        var data = {
            id: this.props.shares[index].id
        };
        this.props.deleteShare(this.props.username, data);
    };
    SharingSettings.prototype.shareFolder = function () {
        var data = {
            username: this.props.username,
            directory: this.props.cwd.join("/")
        };
        this.props.createShare(this.props.username, data);
    };
    SharingSettings.prototype.save = function (id) {
        var name = this.state.name, data = {};
        if (id) {
            this.props.shares.map(function (s) {
                if (s.id == id)
                    data = s;
            });
            data = __assign({}, data, this.state.data);
            this.props.updateShare(this.props.username, data);
        }
        else {
            this.props.createShare(this.props.username, this.state.data);
        }
    };
    SharingSettings.prototype.toggleModal = function () {
        this.setState({
            activated: !this.state.activated
        });
    };
    SharingSettings.prototype.render = function () {
        var _this = this;
        if (this.state.activated) {
            return (React.createElement("div", { style: styles.lightbox },
                React.createElement("div", { style: styles.modal() },
                    React.createElement("div", { style: styles.header },
                        React.createElement("span", { style: styles.title },
                            " ",
                            React.createElement("span", { style: { marginRight: '0.5em' } }, "Shared Folders"),
                            " "),
                        React.createElement("table", null,
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "ID"),
                                    React.createElement("th", null, "Name"),
                                    React.createElement("th", null, "directory"),
                                    React.createElement("th", null)),
                                this.props.shares.map(function (s, i) {
                                    return (React.createElement("tr", { key: i },
                                        React.createElement("td", null, s.id),
                                        React.createElement("td", null, s.name),
                                        React.createElement("td", null, s.directory),
                                        React.createElement("td", null,
                                            " ",
                                            React.createElement(file_button_1.FileButton, { title: "Remove", onClick: function () { _this.remove(i); } }))));
                                })))),
                    React.createElement("div", { style: styles.body },
                        React.createElement(file_button_1.FileButton, { title: "Share Current Folder", onClick: function () { _this.shareFolder(); } }),
                        React.createElement(file_button_1.FileButton, { title: "Close", onClick: function () { _this.toggleModal(); }, style: styles.cancelButton })))));
        }
        else {
            return (React.createElement("span", null));
        }
    };
    return SharingSettings;
}(react_1.Component));
exports.SharingSettings = SharingSettings;
var styles = {
    modal: function () {
        return __assign({}, styles_1.modalStyle(util_2.isMobile()), {
            maxWidth: '729px',
            left: !util_2.isMobile() ? '72px' : '0px'
        });
    },
    lightbox: styles_1.lightboxStyle,
    resultingPath: {
        marginBottom: '1em'
    },
    cancelButton: {
        borderLeft: 'solid 0.2em #005aff'
    },
    header: {
        width: '100%',
        marginTop: '0.5em',
        marginBotto: '0.5em'
    },
    text: {
        width: '75%',
        padding: '0.25em',
        marginBottom: '0.5em',
        background: '#212121',
        border: 'solid 0.1em' + util_1.rgba(255, 255, 255, 0.19),
        borderRadius: '2px',
        fontSize: '1em',
        color: 'white',
    },
    textArea: styles_1.textAreaStyle,
    body: {},
    title: {}
};
//# sourceMappingURL=sharing-settings.js.map