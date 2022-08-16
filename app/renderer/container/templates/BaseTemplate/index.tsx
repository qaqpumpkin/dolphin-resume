import React from 'react';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import './index.less';
import Skill from './components/Skill';
import Education from './components/Education';
import Job from './components/Job';
import Project from './components/Project';
import { useSelector } from 'react-redux';

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
        <Education />
        <Skill />
        <Job />
        <Project />
      </div>
    </div>
  );
}

export default BaseTemplate;
