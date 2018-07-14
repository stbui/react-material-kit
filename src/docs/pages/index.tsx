import React from 'react';
import classnames from 'classnames';
import { Markdown } from '../components/Markdown';

export class Page extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'stbui-toolbar'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div>demo page</div>;
  }
}

export default Page;
