/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';

export class CardMedia extends Component<any, any> {
  static defaultProps = {
    prefixCls: 'stbui-card'
  };

  render() {
    const { prefixCls, className, children, ...otherProps } = this.props;
    const cls = classnames(`${prefixCls}-media`, className);

    return (
      <div className={cls} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default CardMedia;
