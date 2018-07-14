import * as React from 'react';
import { Toolbar } from '../../components/toolbar';

export default class Header extends React.Component {
  render() {
    return (
      <Toolbar style={{ margin: -24, marginBottom: 12 }}>
        <span>React Material Kit</span>
        <span className="spacer" />
      </Toolbar>
    );
  }
}
