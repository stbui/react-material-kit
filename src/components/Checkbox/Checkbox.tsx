/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Checkbox extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-checkbox'
  };

  render() {
    const { prefixCls, className, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <div
        className={cls}
        {...otherProps}
      >
      Checkbox
      </div>
    );
  }
}
export default Checkbox;
