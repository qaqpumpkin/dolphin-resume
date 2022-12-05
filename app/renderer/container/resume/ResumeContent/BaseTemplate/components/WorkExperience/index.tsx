import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Job() {
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
  return (
    <div styleName="content">
      <p styleName="label">工作经历</p>
      {workExperience.map((item: TSResume.WorkExperience, index) => {
        return (
          <div key={index}>
            <div styleName="job">
              <div styleName="jobTitle">
                <strong>{item.company}</strong>
                <div>
                  {item.workTime[0]} - {item.workTime[1]}
                </div>
              </div>
              <div styleName="jobTitle">
                <div>{item.department}</div>
                <div>{item.post}</div>
              </div>
              <div styleName="jobTitle">项目内容：</div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: item.workContent,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Job;
