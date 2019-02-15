/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import { Props, State } from './type';

export class Button extends Component<Props, State> {
  static defaultProps = {
    prefixCls: 'stbui-button',
    raised: false,
    unelevated: false,
    outlined: false,
    dense: false
  };

  render() {
    const {
      raised,
      unelevated,
      outlined,
      dense,
      label,
      icon,
      prefixCls,
      className,
      disabled,
      color,
      children,
      ...otherProps
    } = this.props;
    const cls = classnames('mdc-button', {
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--outlined': outlined,
      'mdc-button--dense': dense,
      'mdc-button__label': label,
      'mdc-button__icon': icon
    });

    return (
      <button className={cls} {...otherProps}>
        <span className="mdc-button__label">{children}</span>
      </button>
    );
  }
}
export default Button;
