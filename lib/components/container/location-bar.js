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
var new_folder_1 = require("../../modal/new-folder");
var text_editor_1 = require("../../modal/text-editor");
var sharing_settings_1 = require("../../modal/sharing-settings");
var move_file_1 = require("../../modal/move-file");
var util_1 = require("../../util");
var LocationBar = (function (_super) {
    __extends(LocationBar, _super);
    function LocationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocationBar.prototype.componentWillMount = function () {
        this.setState({});
    };
    LocationBar.prototype.render = function () {
        var _this = this;
        var ExtraOption = this.props.extraOption || "";
        return (React.createElement("div", { style: __assign({}, styles.bar(), styles.mobile(), this.props.style) },
            React.createElement("div", { onClick: function (e) { _this.props.onItemSelect(_this.props.label, 0); }, style: styles.home },
                React.createElement("span", { style: { marginRight: '0.3em' } }, this.props.label)),
            this.props.path.map(function (opt, i) {
                return (React.createElement("div", { style: styles.option, onClick: function (e) { _this.props.onItemSelect(opt, i); }, key: i },
                    opt,
                    "/"));
            }),
            this.props.showFileOptions ? (React.createElement("div", { style: styles.fileOptions(util_1.isMobile()) },
                React.createElement(text_editor_1.TextEditor, { username: this.props.username, path: this.props.path }),
                React.createElement(new_folder_1.NewFolder, { username: this.props.username, path: this.props.path }),
                React.createElement(move_file_1.MoveFile, { username: this.props.username, path: this.props.path }),
                React.createElement(sharing_settings_1.SharingSettings, { username: this.props.username, path: this.props.path }),
                !util_1.isMobile() ?
                    React.createElement(ExtraOption, __assign({}, { filename: "", username: this.props.username }))
                    : "")) : ""));
    };
    return LocationBar;
}(react_1.Component));
exports.LocationBar = LocationBar;
var styles = {
    bar: function () {
        return {
            cursor: 'pointer',
            width: '100%',
            left: '0',
            top: '0',
            position: 'fixed',
            paddingLeft: '74px',
            marginTop: '0.2em',
            height: '48px',
            display: 'inline-block',
            marginRight: '0.5em',
            marginBottom: '1em'
        };
    },
    mobile: function () {
        return util_1.isMobile() ? {
            marginTop: '5em',
            paddingLeft: '0'
        } : {};
    },
    title: {
        width: '100%',
        height: '40px',
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    option: {
        fontSize: "20pt",
        display: 'inline-block',
        float: 'left',
        marginRight: '0.25em'
    },
    home: {
        fontSize: "20pt",
        display: 'inline-block',
        float: 'left',
        marginLeft: '1em'
    },
    fileOption: {
        padding: '1em',
        paddingBottom: 0,
        height: '48px',
        display: 'inline-block',
        width: 'auto'
    },
    fileOptions: function (mobile) {
        return mobile ? {
            position: 'fixed',
            right: '60px',
            bottom: '-14px',
            height: '60px',
            display: 'inline-block'
        } : {
            position: 'fixed',
            right: '60px',
            top: '14px',
            height: '60px',
            display: 'inline-block'
        };
    }
};
//# sourceMappingURL=location-bar.js.map