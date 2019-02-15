/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';

export class CardActions extends Component<any, any> {
  static defaultProps = {
    prefixCls: 'stbui-card'
  };

  render() {
    const { prefixCls, className, children, ...otherProps } = this.props;
    const cls = classnames(
      'mdc-card__actions',
      { 'mdc-card__actions--full-bleed': false },
      className
    );

    return (
      <div className={cls} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default CardActions;
