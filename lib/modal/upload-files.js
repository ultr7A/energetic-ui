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
var UploadFiles = (function (_super) {
    __extends(UploadFiles, _super);
    function UploadFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadFiles.prototype.componentWillMount = function () {
        this.setState({
            activated: false
        });
    };
    UploadFiles.prototype.componentWillReceiveProps = function (nextProps) {
    };
    UploadFiles.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    UploadFiles.prototype.toggleModal = function () {
        this.setState({
            activated: !this.state.activated
        });
    };
    UploadFiles.prototype.render = function () {
        var _this = this;
        if (this.state.activated) {
            return (React.createElement("div", { style: styles.modal }));
        }
        else {
            return (React.createElement(file_button_1.default, { title: "Upload Files", onClick: function () { _this.toggleModal(); } }));
        }
    };
    return UploadFiles;
}(react_1.Component));
var styles = {
    button: {
        height: '32px',
        display: 'inline-block',
        marginLeft: '0.75em',
        background: 'rgba(255, 255, 255, 0.15)',
        textAlign: "center",
        borderRadius: '1.5px',
        boxShadow: '0 0.25em 0.5em 0px rgba(0, 0, 0, 0.3)'
    },
    modal: {
        width: '60%',
        maxWidth: '729px',
        minWidth: '320px',
        padding: '1em',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto'
    }
};
//# sourceMappingURL=upload-files.js.map