import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmui/button';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Button>Header</Button>
        <Button raised>Header</Button>
        <Button unelevated>Header</Button>
        <Button outlined>Header</Button>
      </div>
    );
  }
}
