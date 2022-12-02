import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function BaseInfo() {
  const baseInfo: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const { name, phone, email, workStatus, expectedMinSalary, expectedMaxSalary } = baseInfo;
  return (
    <div styleName="baseInfo">
      <div styleName="name">
        <h2>
          <strong>{name}</strong>
        </h2>
      </div>
      <div styleName="contact">
        <p>
          {phone} | {email}
        </p>
      </div>
      <div styleName="intention">
        <p>
          {workStatus} | {expectedMinSalary} - {expectedMaxSalary}k
        </p>
      </div>
    </div>
  );
}

export default BaseInfo;
