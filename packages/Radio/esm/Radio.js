/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import classnames from 'classnames';
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, className = _a.className, otherProps = __rest(_a, ["prefixCls", "className"]);
        var cls = classnames(prefixCls, className);
        return (React.createElement("div", __assign({ className: cls }, otherProps), "Radio"));
    };
    Radio.defaultProps = {
        prefixCls: 'stbui-radio'
    };
    return Radio;
}(Component));
export { Radio };
export default Radio;
