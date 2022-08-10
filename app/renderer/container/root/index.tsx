import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@common/constants/router';

function Root() {
  const history = useHistory();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">dolphin-resume</div>
        <div styleName="tips">一个模板简历制作平台，让你的简历更加出众</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By Pumpkin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
