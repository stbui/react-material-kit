import React from 'react';
import classnames from 'classnames';
import { PropsType } from './PropsType';

export class Toolbar extends React.Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-toolbar'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { prefixCls, className, children, ...other } = this.props;
    const cls = classnames(`${prefixCls}`, className);

    return (
      <div className={cls} {...other}>
        {children}
      </div>
    );
  }
}
