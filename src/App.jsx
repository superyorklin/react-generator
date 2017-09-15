import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// 容器
import {
  Frame
} from './services';
// 状态
import stores from './stores';

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)
export default function App() {
  return (
    <Provider {...stores}>
      <HashRouter >
        <Frame>
          <Switch>
            <Redirect exact from="/" to="/business" />
            <Route path="/business" component={Home} />
          </Switch>
        </Frame>
      </HashRouter >
    </Provider>
  );
}
