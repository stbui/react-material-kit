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
import React, { Component } from 'react';
import classnames from 'classnames';
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.now = new Date();
        _this.seed = 0;
        _this.state = {
            children: []
        };
        _this.getUuid = function () {
            return "Ripple-" + _this.now + "_" + _this.seed++;
        };
        _this.getRef = function (node) {
            _this.rippleNode = node;
        };
        _this.ripple = function (event, element) {
            var _a = _this.props, centerMode = _a.centerMode, prefixCls = _a.prefixCls, sizeProps = _a.size;
            var clickEvent = _this.getPoint(event);
            var x = clickEvent.pageX ||
                document.documentElement.scrollLeft +
                    document.body.scrollLeft +
                    clickEvent.clientX;
            var y = clickEvent.pageY ||
                document.documentElement.scrollTop +
                    document.body.scrollTop +
                    clickEvent.clientY;
            var parentNode = _this.rippleNode.parentNode;
            var offsetWidth = parentNode.offsetWidth, offsetHeight = parentNode.offsetHeight;
            var scale = sizeProps === 'sm' ? 2 : 1;
            var size = Math.max(offsetWidth, offsetHeight) * 2;
            var rect = parentNode.getBoundingClientRect();
            if (!centerMode) {
                x = x - rect.left - size / 2;
                y = y - rect.top - size / 2;
            }
            else {
                x = y = -size / 4;
            }
            if (sizeProps === 'sm') {
                x = y = 0;
            }
            element.style.width = size / scale + 'px';
            element.style.height = size / scale + 'px';
            element.style.top = y + 'px';
            element.style.left = x + 'px';
            element.classList.add(prefixCls + "-Effect");
        };
        _this.handleTouchStart = function (event) {
            var prefixCls = _this.props.prefixCls;
            var children = _this.state.children.slice();
            children.push(_this.getUuid());
            _this.setState({ children: children }, function () {
                var activeIndex = children.length - 1;
                var rippleChild = _this.rippleNode.querySelectorAll("." + prefixCls);
                if (rippleChild[activeIndex]) {
                    _this.ripple(event, rippleChild[activeIndex]);
                }
            });
        };
        _this.handleAnimationEnd = function (key) {
            var children = _this.state.children.filter(function (child) {
                return key !== child;
            });
            _this.setState({ children: children });
        };
        _this.touchEvent = {
            touchstart: 'click'
        };
        return _this;
    }
    Ripple.prototype.componentDidMount = function () {
        if (this.rippleNode) {
            this.rippleNode.parentNode.addEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
    };
    Ripple.prototype.componentWillUnmount = function () {
        if (this.rippleNode) {
            this.rippleNode.parentNode.removeEventListener(this.touchEvent.touchstart, this.handleTouchStart);
        }
        this.rippleNode = null;
        this.touchEvent = null;
    };
    Ripple.prototype.getPoint = function (event) {
        event = event || window.event;
        return event;
    };
    Ripple.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, children = _b.children, prefixCls = _b.prefixCls, className = _b.className, hidden = _b.hidden;
        var cls = classnames(prefixCls, className);
        var elementCls = classnames(prefixCls + "-element", (_a = {},
            _a[prefixCls + "-hidden"] = hidden,
            _a));
        var styles = {
            backgroundColor: this.props.rippleColor
        };
        return (React.createElement("div", { className: elementCls, ref: this.getRef }, this.state.children.map(function (child) {
            return (React.createElement("div", { key: child, className: cls, style: styles, onAnimationEnd: function () { return _this.handleAnimationEnd(child); } }, children));
        })));
    };
    Ripple.defaultProps = {
        prefixCls: 'stbui-ripple',
        centerMode: false,
        hidden: true
    };
    return Ripple;
}(Component));
export { Ripple };
export default Ripple;
