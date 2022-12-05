import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker } from 'antd';
import '../modal.less';
import MyEditor from '../../../../components/MyEditor';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface SkillProps {
  onClose: () => void;
}

function Skill(props: SkillProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const updateResumeHook = useUpdateResumeHook();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const [form] = Form.useForm();
  const skill: TSResume.Skill = useSelector((state: any) => state.resumeModel.skill);
  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      form.setFieldsValue(JSON.parse(JSON.stringify(skill)));
    }
    return () => {
      isUnmounted = true;
    };
  }, []);
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const onFinish = () => {
    updateResumeHook('skill', form.getFieldsValue());
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
      <Modal title="专业技能" {...searchBarProps} style={{ borderRadius: '10px' }} width={800} onOk={onFinish}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          initialValues={JSON.parse(JSON.stringify(skill))}
        >
          <Form.Item label="专业技能" name="content" rules={[rules]}>
            <MyEditor />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Skill;
