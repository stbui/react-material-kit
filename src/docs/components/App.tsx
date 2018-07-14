import * as React from 'react';
import Header from '../components/Header';
import '../../components/core/style';
import { ToolBar } from '../../components';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ToolBar />
      </div>
    );
  }
}
