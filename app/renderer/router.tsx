import React from 'react'
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Root from './container/root'

function Router() {
    return (
        <HashRouter> {/*基于hash模式*/}
            <Switch> {/*保证路由只渲染一个路径*/}
                <Route path="/" exact> {/*路由严格匹配*/}
                    <Root/>
                </Route>
            </Switch>
            <Redirect to="/" /> {/*Redirect必须放在switch里的最后一行，如果上面的路由都匹配不上就进行重定向*/}
        </HashRouter>
    )
}
export default Router