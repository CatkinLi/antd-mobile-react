import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login/Login';
import Home from './routes/homePage/Home';
import Project from './routes/project/Project';
import StationProgress from './routes/progress/StationProgress';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/project" exact component={Project} />
        <Route path="/progress" exact component={StationProgress} />
        <footer>
          here footer
        </footer>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
