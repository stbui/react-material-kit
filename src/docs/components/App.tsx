import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import Header from './Header';
import { Page } from '../pages';
import { Markdown } from '../components/Markdown';
import { Drawer } from '../../components/Drawer';
import { Divider } from '../../components/Divider';
import { List, ListItem } from '../../components/List';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Drawer active="true">
          <List>
            <ListItem component="a" href="#/components/card">
              Card
            </ListItem>
            <Divider />
            <ListItem component="a" href="#/components/toolbar">
              Toolbar
            </ListItem>
            <Divider />
            <ListItem component="a" href="#/components/button">
              Button
            </ListItem>
            <Divider />
            <ListItem component="a" href="#/components/drawer">
              Drawer
            </ListItem>
            <Divider />
            <ListItem component="a" href="#/components/list">
              List
            </ListItem>
            <Divider />
            <ListItem component="a" href="#/components/divider">
              Divider
            </ListItem>
          </List>
        </Drawer>
        <div style={{ marginLeft: 256, padding: 24 }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Page} />
            <Route
              exact
              path="/components/card"
              component={() => (
                <Markdown text={require(`../../components/card/README.md`)} />
              )}
            />
            <Route
              exact
              path="/components/button"
              component={() => (
                <Markdown text={require(`../../components/button/README.md`)} />
              )}
            />
            <Route
              exact
              path="/components/toolbar"
              component={() => (
                <Markdown
                  text={require(`../../components/toolbar/README.md`)}
                />
              )}
            />
            <Route
              exact
              path="/components/drawer"
              component={() => (
                <Markdown text={require(`../../components/drawer/README.md`)} />
              )}
            />
            <Route
              exact
              path="/components/list"
              component={() => (
                <Markdown text={require(`../../components/List/README.md`)} />
              )}
            />
            <Route
              exact
              path="/components/divider"
              component={() => (
                <Markdown
                  text={require(`../../components/divider/README.md`)}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
