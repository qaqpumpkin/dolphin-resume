import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Education() {
  const personalProject: TSResume.PersonalProject = useSelector((state: any) => state.resumeModel.personalProject);
  return (
    <div styleName="content">
      <p styleName="label">个人项目</p>
      <div
        dangerouslySetInnerHTML={{
          __html: personalProject.content,
        }}
      />
    </div>
  );
}

export default Education;
