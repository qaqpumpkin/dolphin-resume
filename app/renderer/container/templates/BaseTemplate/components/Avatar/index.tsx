import React from 'react';
import './index.less';
import AvatarImage from '@assets/avatar.jpg';
import { Image } from 'antd';

function Avatar() {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <Image width={120} src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;
