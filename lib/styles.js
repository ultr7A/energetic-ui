"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalStyle = function (mobile) {
    return {
        width: '100%',
        minWidth: '320px',
        height: mobile ? '86%' : '88%',
        padding: '1em',
        paddingLeft: mobile ? '0em' : '1em',
        position: 'absolute',
        top: mobile ? '64px' : '0px',
        right: '0px',
        bottom: '0px',
        margin: 'auto',
        borderRadius: '0.2em',
        border: '0.15em solid rgb(60,60,60)',
        borderTop: 'rgb(51, 51, 51) 1em solid',
        backgroundColor: "rgb(41, 42, 46)",
        boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.92)"
    };
};
exports.basicInputStyle = {
    display: 'block',
    marginBottom: '0.5em'
};
exports.lightboxStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
};
exports.textAreaStyle = function (mobile) {
    return {
        margin: '0px',
        width: '95%',
        height: mobile ? '60vh' : '70vh',
        color: 'white',
        marginBottom: '0.5em',
        padding: '0.5em',
        fontSize: '14px',
        border: '0.22em solid rgb(41, 42, 46)',
        borderRadius: '0.22em',
        background: 'rgba(0, 0, 0, 0.16) none repeat scroll 0% 0%'
    };
};
var compactWidth = function (compact) { return compact ? '52px' : '60px'; };
exports.tabStyle = function (compact) {
    var width = compactWidth(compact), top = compact ? "-3px" : 0, marginLeft = compact ? '-6px' : 0;
    return {
        color: 'rgba(255,255,255,0.92)',
        fontSize: '15px',
        position: 'relative',
        display: 'inline-block',
        height: width,
        marginLeft: marginLeft,
        width: width,
        top: top
    };
};
exports.tabTitleStyle = function (mobile) {
    return {
        transition: "all 0.3s linear",
        height: 0,
        opacity: 0,
        fontSize: '12px',
        position: 'relative',
        top: mobile ? '0px' : '-15px'
    };
};
exports.buttonStyle = function (compact) {
    var width = compactWidth(compact);
    return {
        display: 'inline-block',
        height: width,
        width: width
    };
};
exports.buttonInnerStyle = function (compact) {
    var width = compactWidth(compact);
    return {
        transition: 'all 0.2s linear',
        height: width,
        width: width,
        display: 'block',
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        cursor: 'pointer'
    };
};
exports.buttonFileStyle = function () {
    return {
        position: 'relative',
        bottom: '-1.5em',
        left: '0.5em',
        width: '92px',
        opacity: 0
    };
};
exports.textTitleInputStyle = {
    width: '40%',
    padding: '0.25em',
    marginBottom: '0.5em',
    background: '#212121',
    border: '0.22em solid #494949',
    borderRadius: '3px',
    fontSize: '1em',
    color: 'white',
    marginRight: '0.5em'
};
exports.fileButtonStyle = {
    height: '28px',
    verticalAlign: 'top',
    display: 'inline-block',
    paddingLeft: '0.5em',
    paddingBottom: '0.25em',
    paddingTop: '0.1em',
    paddingRight: '0.5em',
    marginLeft: '0.5em',
    background: 'rgba(255, 255, 255, 0.15)',
    textAlign: "center",
    borderRadius: '1.5px',
    borderLeft: '0.2em solid lime',
    boxShadow: '0 0.25em 0.5em 0px rgba(0, 0, 0, 0.3)'
};
//# sourceMappingURL=styles.js.map