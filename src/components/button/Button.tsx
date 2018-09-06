/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import { Ripple } from '../Ripple';
import { Props, State } from './type';

export class Button extends Component<Props, State> {
  static defaultProps = {
    prefixCls: 'stbui-button',
    raised: false,
    stroked: false,
    icon: false,
    fab: false
  };

  render() {
    const {
      raised,
      stroked,
      icon,
      fab,
      prefixCls,
      className,
      children,
      ...otherProps
    } = this.props;
    const cls = classnames(
      prefixCls,
      [
        { 'stbui-raised-button': raised },
        { 'stbui-stroked-button': stroked },
        { 'stbui-icon-button': icon },
        { 'stbui-fab-button': fab }
      ],
      className
    );

    return (
      <button className={cls} {...otherProps}>
        {children}
        <Ripple />
      </button>
    );
  }
}
export default Button;
