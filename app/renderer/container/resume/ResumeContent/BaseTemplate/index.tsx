import React from 'react';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import './index.less';
import Skill from './components/Skill';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Project from './components/Project';
import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';

function BaseTemplate() {
  const resumeToolKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);
  return (
    <div styleName="resume" id="pdf">
      <div styleName="title">
        <div styleName="baseInfo">
          <BaseInfo />
        </div>
        <div styleName="avatar">
          <Avatar />
        </div>
      </div>
      <div styleName="resumeData">
        {resumeToolKeys.includes(RESUME_TOOLBAR_MAPS.education) && <Education />}
        {resumeToolKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
        {resumeToolKeys.includes(RESUME_TOOLBAR_MAPS.job) && <WorkExperience />}
        {resumeToolKeys.includes(RESUME_TOOLBAR_MAPS.project) && <Project />}
      </div>
    </div>
  );
}

export default BaseTemplate;
