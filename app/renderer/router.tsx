import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@src/common/constants/router';

function Router() {
  return (
    <HashRouter>
      {/* 基于hash模式 */}
      <Switch>
        {/* 保证路由只渲染一个路径 */}
        <Route path={ROUTER.root} exact>
          {/* 路由严格匹配 */}
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to={ROUTER.root} /> {/* Redirect必须放在switch里的最后一行，如果上面的路由都匹配不上就进行重定向 */}
    </HashRouter>
  );
}
export default Router;
