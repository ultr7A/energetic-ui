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
var VectorInput = (function (_super) {
    __extends(VectorInput, _super);
    function VectorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VectorInput.prototype.componentWillMount = function () {
        this.setState({
            values: new Array(this.props.axis + 1).join('0').split('').map(parseFloat)
        });
    };
    VectorInput.prototype.getValue = function () {
        return this.state.values;
    };
    VectorInput.prototype.onChange = function (event, i) {
        var values = this.state.values;
        values[i] = parseInt(event.target.value);
        this.setState({
            values: values
        });
        this.props.onChange && this.props.onChange(values, event);
    };
    VectorInput.prototype.render = function () {
        var _this = this;
        var innerStyle = this.props.innerStyle != false ? __assign({}, styles.inner, this.props.innerStyle) : styles.inner, style = this.props.style != false ? __assign({}, styles.button, this.props.style) : styles.button;
        innerStyle.backgroundImage = 'url(' + (this.props.image != null ? this.props.image : "") + ')';
        return (React.createElement("div", { style: styles.vectorInput, className: "ui-vector-input" }, this.state.values.map(function (value, i) {
            return (React.createElement("input", { step: "" + (1 / (Math.pow(10, _this.props.decimalPlaces))), onBlur: function (e) { _this.onChange(e, i); }, style: styles.numeric, defaultValue: (i == 3 ? 1 : value) + "", type: 'number', key: i }));
        })));
    };
    VectorInput.defaultProps = {
        title: "Button",
        axis: 3,
        style: false,
        decimalPlaces: 2
    };
    return VectorInput;
}(react_1.Component));
exports.VectorInput = VectorInput;
var styles = {
    button: {
        display: 'inline-block',
        width: '60px',
        height: '60px'
    },
    vectorInput: {
        display: 'inline-block',
        height: '20px',
        paddingBottom: '0.5em',
        paddingLeft: '0.75em',
        marginBottom: '0.25em'
    },
    numeric: {
        display: 'inline-block',
        marginRight: '1em',
        width: '80px',
        color: "white",
        padding: '0.5em',
        background: 'rgba(2, 2, 2, 0.07) none repeat scroll 0% 0%',
        border: 'medium none',
        borderRadius: '0.15em',
        fontSize: '0.9em',
        boxShadow: 'inset 0 0 1em #0003'
    },
    inner: {
        transition: 'all 0.2s linear',
        width: '60px',
        height: '60px',
        display: 'block',
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        cursor: 'pointer'
    },
    file: {
        position: 'relative',
        bottom: '-1.5em',
        left: '0.5em',
        width: '92px',
        opacity: 0
    }
};
//# sourceMappingURL=vector-input.js.map