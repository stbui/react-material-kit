/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Badge extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-badge'
  };

  render() {
    const { prefixCls, className, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <div className={cls} {...otherProps}>
        Badge
      </div>
    );
  }
}
export default Badge;
