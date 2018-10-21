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
var file_button_1 = require("../components/button/file-button");
var util_1 = require("../util");
var NewFolder = (function (_super) {
    __extends(NewFolder, _super);
    function NewFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewFolder.prototype.componentWillMount = function () {
        this.setState({
            activated: false,
            resultingPath: "",
            name: ""
        });
    };
    NewFolder.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.creatingDir && nextProps.creatingDir == false) {
            this.props.listDirectories(nextProps.username, nextProps.cwd.join("/"));
        }
    };
    NewFolder.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    NewFolder.prototype.toggleModal = function () {
        this.setState({
            name: "",
            activated: !this.state.activated
        });
    };
    NewFolder.prototype.handleTextChange = function (e) {
        this.setState({
            name: e.target.value
        });
    };
    NewFolder.prototype.make = function () {
        var cwd = this.props.cwd.join("/"), dirName = this.state.name.indexOf(' ') > -1 ? this.state.name.split(' ').join('-') : this.state.name, name = this.state.name;
        if (name != "") {
            this.props.createDirectory(this.props.username, cwd + "/" + dirName);
            this.toggleModal();
        }
        else {
            alert("Name is required.");
        }
    };
    NewFolder.prototype.render = function () {
        var _this = this;
        var cwd = !!this.props.cwd ? this.props.cwd.join("/") : "", resultingPath = "" + this.props.username + cwd + "/" + this.state.name.split(' ').join('-');
        if (this.state.activated) {
            return (React.createElement("div", { style: styles.lightbox },
                React.createElement("div", { style: styles.modal },
                    React.createElement("div", { style: styles.header },
                        React.createElement("span", { style: styles.title }, " New Folder ")),
                    React.createElement("div", { style: styles.body },
                        React.createElement("input", { type: "text", onChange: function (e) { _this.handleTextChange(e); }, style: styles.text }),
                        React.createElement("div", { style: styles.resultingPath }, resultingPath),
                        React.createElement(file_button_1.default, { title: "Make", onClick: function () { _this.make(); } }),
                        React.createElement(file_button_1.default, { title: "Cancel", onClick: function () { _this.toggleModal(); }, style: styles.cancelButton })))));
        }
        else {
            return (React.createElement(file_button_1.default, { title: "New Folder", onClick: function () { _this.toggleModal(); } }));
        }
    };
    return NewFolder;
}(react_1.Component));
exports.default = NewFolder;
var styles = {
    modal: {
        width: '20%',
        maxWidth: '729px',
        minWidth: '320px',
        height: '192px',
        padding: '0.25em',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        background: util_1.rgb(38, 38, 38),
        borderTop: '0.2em solid' + util_1.rgba(255, 255, 255, 0.06),
        boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.92)"
    },
    lightbox: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: util_1.rgba(0, 0, 0, 0.0)
    },
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
    body: {},
    title: {}
};
//# sourceMappingURL=new-folder.js.map