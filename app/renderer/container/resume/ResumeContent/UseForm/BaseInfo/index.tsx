import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

interface BaseInfoProps {
  isShow: boolean;
}

function BaseInfo(props: BaseInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(props.isShow);
  const { isShow } = props;
  useEffect(() => {
    setIsModalOpen(isShow);
  }, [isShow]);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const searchBarProps = {
    open: isModalOpen,
    onOk: handleOk,
    onCancel: handleCancel,
  };
  console.log('searchBarProps', searchBarProps);
  return (
    <>
      <div />
      <Modal title="baseInfo" {...searchBarProps}>
        <p>123123123123</p>
      </Modal>
    </>
  );
}

export default BaseInfo;
