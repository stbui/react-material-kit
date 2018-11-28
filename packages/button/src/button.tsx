/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
// import { Ripple } from '../Ripple';
import { Props, State } from './type';

export class Button extends Component<Props, State> {
  static defaultProps = {
    prefixCls: 'stbui-button',
    raised: false,
    stroked: false,
    icon: false,
    fab: false,
    disabled: true
  };

  render() {
    const {
      raised,
      stroked,
      icon,
      fab,
      prefixCls,
      className,
      disabled,
      color,
      children,
      ...otherProps
    } = this.props;
    const cls = classnames({
      [prefixCls]: true && !raised && !stroked && !stroked && !icon && !fab,
      'stbui-raised-button': raised,
      'stbui-stroked-button': stroked,
      'stbui-icon-button': icon,
      'stbui-fab-button': fab,
      [className!]: !!className,
      [`stbui-button-${color}`]: !!color
    });

    return (
      <button className={cls} {...otherProps}>
        {children}
        {/* <Ripple /> */}
      </button>
    );
  }
}
export default Button;
