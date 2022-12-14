import React, { useEffect, useState } from 'react';
import './index.less';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import BaseTemplate from './BaseTemplate';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import BaseInfo from './UseForm/BaseInfo';
import Education from './UseForm/Education';
import Project from './UseForm/Project';
import WorkExperience from './UseForm/WorkExperience';
import Skill from './UseForm/Skill';

function ResumeContent() {
  const [formName, setFormName] = useState('');
  const [height, setHeight] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  useEffect(() => {
    if (document.body && document.body.clientHeight > 0) setHeight(document.body.clientHeight);
  }, [document.body]);

  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };
  return (
    <div className="scroll-box-outer" style={{ maxHeight: `${height - 92}px` }}>
      <div className="scroll-box-hidden" style={{ maxHeight: `${height - 92}px` }}>
        <div className="scroll-box-inter">
          <BaseTemplate />
          {formName === RESUME_TOOLBAR_MAPS.baseInfo && <BaseInfo onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.education && <Education onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.project && <Project onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.job && <WorkExperience onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.skill && <Skill onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}
export default ResumeContent;
