import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const Dashbord = () => (
  <div>
    <Header />
  </div>
);
const About = () => <div>About</div>;

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashbord} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

