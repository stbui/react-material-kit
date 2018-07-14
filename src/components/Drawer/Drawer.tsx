/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Drawer extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-drawer',
    position: 'start'
  };

  render() {
    const {
      position,
      active,
      prefixCls,
      className,
      children,
      ...other
    } = this.props;
    const cls = classnames(
      prefixCls,
      {
        [`${prefixCls}-fixed`]: true,
        [`${prefixCls}-left`]: position === 'start',
        [`${prefixCls}-right`]: position === 'end',
        [`${prefixCls}-active`]: !!active
      },
      className
    );

    return (
      <div className={cls} {...other}>
        {children}
      </div>
    );
  }
}
export default Drawer;
