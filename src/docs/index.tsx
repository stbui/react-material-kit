import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './styles';

export default class Index extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
