/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class ListItem extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-list-item',
    component: 'div'
  };

  render() {
    const {
      component,
      href,
      prefixCls,
      className,
      children,
      ...otherProps
    } = this.props;
    const cls = classnames(prefixCls, className);

    const Component = component;

    return (
      <li className={cls} {...otherProps}>
        <Component className={`stbui-list-title`} href={href}>
          {children}
        </Component>
      </li>
    );
  }
}
export default ListItem;
