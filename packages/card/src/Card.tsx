/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Card extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'mdc-card'
  };

  render() {
    const {
      prefixCls,
      outlined,
      className,
      children,
      ...otherProps
    } = this.props;
    const cls = classnames(
      prefixCls,
      {
        'mdc-card--outlined': outlined
      },
      className
    );

    return (
      <div className={cls} {...otherProps}>
        {children}
      </div>
    );
  }
}
export default Card;
