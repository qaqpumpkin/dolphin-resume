import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Education() {
  const education: TSResume.Education[] = useSelector((state: any) => state.resumeModel.education);
  console.log('education', education);
  return (
    <div styleName="content">
      <p styleName="label">教育经历</p>
      {education.map((item: TSResume.Education, index) => {
        return (
          <div key={index}>
            <div styleName="school">
              <div>
                <strong>{item.school}</strong>
              </div>
              <div>
                {item.educationTime[0]} - {item.educationTime[1]}
              </div>
            </div>
            <p>
              {item.major} {item.degree}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
