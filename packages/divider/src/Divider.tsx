/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Divider extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-divider',
    vertical: false,
    inset: false
  };

  render() {
    const { vertical, inset, prefixCls, className, ...otherProps } = this.props;
    const cls = classnames(
      prefixCls,
      [
        { [`stbui-divider-inset`]: inset },
        { [`stbui-divider-vertical`]: vertical }
      ],
      className
    );

    return <div className={cls} {...otherProps} />;
  }
}
export default Divider;
