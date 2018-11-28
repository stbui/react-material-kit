/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class List extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-list'
  };

  render() {
    const { prefixCls, className, children, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <ul className={cls} {...otherProps}>
        {children}
      </ul>
    );
  }
}
export default List;
