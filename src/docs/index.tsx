import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles';

export default class Index extends React.Component {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
