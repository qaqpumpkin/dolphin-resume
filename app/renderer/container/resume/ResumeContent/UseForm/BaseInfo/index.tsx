import React, {CSSProperties, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message } from 'antd';
import '../modal.less';

type modal = CSSProperties;

interface BaseInfoProps {
  onClose: () => void;
}
function BaseInfo(props: BaseInfoProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  console.log('base', base);
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const onFinish = () => {
    messageApi.open({
      type: 'success',
      content: '编辑成功',
    });
  };
  const searchBarProps = {
    open: true,
    onOk: handleOk,
    onCancel: handleCancel,
    okText: '确认',
    cancelText: '取消',
  };
  console.log('searchBarProps', searchBarProps);
  return (
    <>
      {contextHolder}
      <Modal title="基础信息" {...searchBarProps} style={{ borderRadius: '10px' }}>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
          <Form.Item label="姓名" name="name" rules={[rules]}>
            <Input defaultValue={base.name} />
          </Form.Item>
          <Form.Item label="电话号码" name="phone" rules={[rules]}>
            <Input defaultValue={base.phone} />
          </Form.Item>
          <Form.Item label="邮箱" name="email" rules={[rules]}>
            <Input defaultValue={base.email} />
          </Form.Item>
          <Form.Item label="工作状态" name="workStatus" rules={[rules]}>
            <Input defaultValue={base.workStatus} />
          </Form.Item>
          <Form.Item label="期望薪资" name="expectedSalary" rules={[rules]}>
            <Input defaultValue={base.expectedMinSalary} />
            -
            <Input defaultValue={base.expectedMaxSalary} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default BaseInfo;
