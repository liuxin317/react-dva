import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const UserPageA = dynamic({
    app,
    component: () => import('./components/A'),
  });

  const UserPageB = dynamic({
    app,
    component: () => import('./components/B'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to='/a' />}/>
        <Route path="/a" component={UserPageA} />
        <Route path="/b" component={UserPageB} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
