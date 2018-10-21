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
var side_menu_1 = require("../nav/side-menu");
var util_1 = require("../../util");
var Shell = (function (_super) {
    __extends(Shell, _super);
    function Shell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Shell, "defaultProps", {
        get: function () {
            return {
                noBackground: false,
                htmlClassName: "",
                innerStyle: {},
                data: {}
            };
        },
        enumerable: true,
        configurable: true
    });
    Shell.prototype.componentWillMount = function () {
        this.setState({
            droppingFile: false
        });
    };
    Shell.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    Shell.prototype.uploadFiles = function (files) {
        var dir = (this.props.cwd || []).join("/");
        console.log("upload files dir ", dir);
        if (!!this.props.currentSpace) {
            if ((dir == "/" || dir == "") && this.props.worldUser == this.props.username) {
                dir = "/spaces/" + this.props.currentSpace;
            }
        }
        if ((this.props.reactPath + "").indexOf("/chat") > -1) {
            dir = "chat-uploads";
        }
        var xhr = new XMLHttpRequest(), formData = new FormData(), ins = files.length, thumbs = [], images = /(\.jpg|\.jpeg|\.png|\.webp)$/i, username = this.props.username, fileNames = [], shell = this;
        if (username == 'Human') {
            username = 'public';
        }
        for (var x = 0; x < ins; x++) {
            if (images.test(files[x].name)) {
                thumbs.push(files[x]);
            }
            formData.append("files", files[x]);
            fileNames.push(files[x].name.replace(/\s/g, '-'));
        }
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log("finished uploading");
                if (shell.props.listFiles) {
                    shell.props.listFiles(shell.props.username, (shell.props.cwd || []).join("/"));
                }
            }
        };
        xhr.open("POST", "/api/files/upload-multiple/" + username + "?dir=" + dir, true);
        if ("upload" in new XMLHttpRequest) {
            xhr.upload.onprogress = function (event) {
                if (event.lengthComputable) {
                    var complete = (event.loaded / event.total * 100 | 0);
                    console.log(complete);
                    if (complete == 100) {
                        if (window.location.href.indexOf("/chat") > -1) {
                            setTimeout(function () {
                                shell.props.sendMessage &&
                                    shell.props.sendMessage("Uploaded " + (ins > 1 ? ins + " Files" : "a File"), from, fileNames, null, window.three.world.name);
                            }, 500);
                        }
                    }
                }
            };
        }
        xhr.send(formData);
        var from = this.props.username;
        this.setDropBackground(false);
    };
    Shell.prototype.setDropBackground = function (mode) {
        this.setState({
            droppingFile: mode
        });
    };
    Shell.prototype.render = function () {
        var _this = this;
        var hasMenu = !!this.props.hasMenu, menuOnly = !!this.props.menuOnly, menuOpen = !!this.props.menuOpen, noBackground = !!this.props.noBackground;
        return (React.createElement("div", { style: styles.shell(hasMenu, menuOpen, menuOnly, noBackground, this.state.droppingFile), onDrop: function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.uploadFiles(e.target.files || e.dataTransfer.files);
            }, onDragEnter: function (e) { e.preventDefault(); e.stopPropagation(); _this.setDropBackground(true); }, onDragOver: function (e) { e.preventDefault(); e.stopPropagation(); }, onDragLeave: function (e) { e.preventDefault(); e.stopPropagation(); _this.setDropBackground(false); }, onClick: function (e) {
                if (e.target.getAttribute('id') == 'shell') {
                    _this.props.toggleMenu && _this.props.toggleMenu(true);
                }
            }, className: this.props.htmlClassName || 'shell', id: 'shell' },
            hasMenu ? (React.createElement(side_menu_1.default, null)) : '',
            menuOnly ? '' : (React.createElement("div", { style: __assign({}, styles.inner(), this.props.innerStyle) }, this.props.children))));
    };
    return Shell;
}(react_1.Component));
exports.default = Shell;
var styles = {
    shell: function (hasMenu, menuOpen, menuOnly, noBackground, droppingFile) {
        var mobile = util_1.isMobile();
        return {
            margin: 'auto',
            position: 'fixed',
            top: 0,
            left: 0,
            textAlign: 'center',
            width: (menuOnly && !mobile ? '72px' : '100%'),
            height: menuOnly && mobile ? '72px' : '100vh',
            display: (menuOpen ? "block" : "none"),
            zIndex: (hasMenu ? 999999 : 1),
            cursor: 'pointer',
            backgroundColor: droppingFile ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
            backgroundImage: noBackground ? 'none' : 'linear-gradient(to bottom, #0c0c0c, #111111, #212121)',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: '20px'
        };
    },
    inner: function () {
        var mobile = util_1.isMobile();
        return {
            paddingTop: mobile ? '166px' : '56px',
            paddingLeft: mobile ? '0px' : '72px'
        };
    }
};
//# sourceMappingURL=shell.js.map