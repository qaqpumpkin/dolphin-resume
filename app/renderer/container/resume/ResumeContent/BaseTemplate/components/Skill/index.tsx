import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Skill() {
  const skill: TSResume.Skill = useSelector((state: any) => state.resumeModel.skill);
  return (
    <div styleName="content">
      <p styleName="label">专业技能</p>
      <div
        dangerouslySetInnerHTML={{
          __html: skill.content,
        }}
      />
    </div>
  );
}

export default Skill;
