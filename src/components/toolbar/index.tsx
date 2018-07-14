import * as React from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class ToolBar extends React.Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-toolbar'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { prefixCls, className } = this.props;
    const cls = classnames(`${prefixCls}`, className);

    return <div className={cls}>ToolBar</div>;
  }
}
