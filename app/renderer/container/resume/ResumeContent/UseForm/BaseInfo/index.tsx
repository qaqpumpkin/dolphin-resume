import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, InputNumber } from 'antd';
import '../modal.less';
import useUpdateResumeHook from '../../useUpdateResumeHook';

interface BaseInfoProps {
  onClose: () => void;
}
function BaseInfo(props: BaseInfoProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const updateResumeHook = useUpdateResumeHook();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const [form] = Form.useForm();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  form.setFieldsValue(base);
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const onFinish = () => {
    updateResumeHook('base', form.getFieldsValue());
    messageApi.open({
      type: 'success',
      content: '编辑成功',
    });
    onClose();
  };
  const searchBarProps = {
    open: true,
    onOk: handleOk,
    onCancel: handleCancel,
    okText: '确认',
    cancelText: '取消',
  };
  return (
    <>
      {contextHolder}
      <Modal title="基础信息" {...searchBarProps} style={{ borderRadius: '10px' }} onOk={onFinish}>
        <Form form={form} name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} autoComplete="off">
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
          <Form.Item label="最低期望薪资" name="expectedMinSalary" rules={[rules]}>
            <InputNumber addonAfter="k" defaultValue={base.expectedMinSalary} />
          </Form.Item>
          <Form.Item label="最高期望薪资" name="expectedMaxSalary" rules={[rules]}>
            <InputNumber addonAfter="k" defaultValue={base.expectedMaxSalary} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default BaseInfo;
