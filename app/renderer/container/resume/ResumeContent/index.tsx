import React, { useEffect, useState } from 'react';
import './index.less';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import BaseTemplate from './BaseTemplate';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import BaseInfo from './UseForm/BaseInfo';

function ResumeContent() {
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      console.log('ata?.form_name', data.form_name);
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };
  return (
    <div>
      <BaseTemplate />
      <BaseInfo isShow={formName === RESUME_TOOLBAR_MAPS.baseInfo && showFormModal} />
    </div>
  );
}
export default ResumeContent;
