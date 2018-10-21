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
var file_button_1 = require("../components/button/file-button");
var util_1 = require("../util");
var styles_1 = require("../styles");
var util_2 = require("../util");
var TextEditor = (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextEditor.prototype.componentWillMount = function () {
        this.setState({
            activated: false,
            text: "",
            name: ""
        });
        if (!!this.props.fileURL) {
            this.props.readText(this.props.fileURL, this.props.username, this.props.cwd.join("/"));
        }
    };
    TextEditor.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.readTextFetching && nextProps.readTextFetching == false && !!nextProps.textData) {
            this.setState({
                text: nextProps.textData.text
            });
        }
        if (this.props.filename != nextProps.filename || this.props.dir != nextProps.dir) {
            if (nextProps.dir != "" && nextProps.filename != "") {
                this.props.readText(nextProps.filename, nextProps.fileUser, nextProps.dir);
                this.setState({
                    name: nextProps.filename
                });
            }
        }
        if (this.props.activated == false && nextProps.activated == true) {
            this.setState({
                activated: true
            });
        }
        if (this.props.writeTextFetching && nextProps.writeTextFetching == false) {
            this.props.listFiles(nextProps.username, nextProps.cwd.join("/"));
        }
    };
    TextEditor.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    TextEditor.prototype.handleTextChange = function (e) {
        this.setState({
            name: e.target.value
        });
    };
    TextEditor.prototype.handleTextArea = function (e) {
        this.setState({
            text: e.target.value
        });
    };
    TextEditor.prototype.save = function () {
        var name = this.state.name, dir = this.props.activated ? this.props.dir : this.props.cwd.join("/");
        if (name != "") {
            this.props.writeText(this.state.text, name, this.props.fileUser || this.props.username, dir);
            this.toggleModal();
        }
        else {
            alert("Name is required.");
        }
    };
    TextEditor.prototype.toggleModal = function () {
        this.props.closeTextEdit();
        this.setState({
            activated: !this.state.activated
        });
    };
    TextEditor.prototype.render = function () {
        var _this = this;
        if (this.state.activated) {
            return (React.createElement("div", { style: styles.lightbox },
                React.createElement("div", { style: styles.modal() },
                    React.createElement("div", { style: styles.header },
                        React.createElement("span", { style: styles.title },
                            " ",
                            React.createElement("span", { style: { marginRight: '0.5em' } }, "Editing"),
                            React.createElement("input", { defaultValue: this.state.name, type: "text", onChange: function (e) { _this.handleTextChange(e); }, style: styles.text }))),
                    React.createElement("div", { style: styles.body },
                        this.props.readTextFetching == false ? (React.createElement("textarea", { defaultValue: this.state.text, style: styles.textArea(util_1.isMobile()), onBlur: function (e) { return _this.handleTextArea(e); } })) : "",
                        React.createElement(file_button_1.default, { title: "Save", onClick: function () { _this.save(); } }),
                        React.createElement(file_button_1.default, { title: "Cancel", onClick: function () { _this.toggleModal(); }, style: styles.cancelButton })))));
        }
        else {
            return (React.createElement(file_button_1.default, { title: "New File", onClick: function () { _this.toggleModal(); } }));
        }
    };
    return TextEditor;
}(react_1.Component));
exports.default = TextEditor;
var styles = {
    modal: function () {
        return __assign({}, styles_1.modalStyle(util_1.isMobile()), {
            maxWidth: '960px',
            left: !util_1.isMobile() ? '72px' : '0px',
            boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.92)"
        });
    },
    lightbox: __assign({}, styles_1.lightboxStyle, { backgroundColor: 'rgba(0,0,0,0.0)' }),
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
        border: 'solid 0.1em' + util_2.rgba(255, 255, 255, 0.19),
        borderRadius: '2px',
        fontSize: '1em',
        color: 'white',
    },
    textArea: styles_1.textAreaStyle,
    body: {},
    title: {}
};
//# sourceMappingURL=text-editor.js.map