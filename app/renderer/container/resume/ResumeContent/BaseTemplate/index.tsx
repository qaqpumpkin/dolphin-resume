import React from 'react';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import './index.less';
import Skill from './components/Skill';

function BaseTemplate() {
  return (
    <div styleName="resume">
      <div styleName="title">
        <div styleName="baseInfo">
          <BaseInfo />
        </div>
        <div styleName="avatar">
          <Avatar />
        </div>
      </div>
      <div styleName="resumeData">
        <Skill />
      </div>
    </div>
  );
}

export default BaseTemplate;
