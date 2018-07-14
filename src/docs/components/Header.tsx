import * as React from 'react';

export default class Header extends React.Component {
  render() {
    console.log(1)
    return (
      <header className="header">
        <span>React Material Kit</span>
        <span className="spacer" />
      </header>
    );
  }
}
