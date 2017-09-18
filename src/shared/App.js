import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home, About, Posts, Users } from 'pages';
import { Menu } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React Router & SSR</title>
        </Helmet>
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Route path="/users" component={Users}/>
      </div>
    );
  }
}

export default App;