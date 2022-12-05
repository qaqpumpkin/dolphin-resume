import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker } from 'antd';
import '../modal.less';
import MyEditor from '../../../../components/MyEditor';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface ProjectProps {
  onClose: () => void;
}

function Project(props: ProjectProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const updateResumeHook = useUpdateResumeHook();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const [form] = Form.useForm();
  const personalProject: TSResume.PersonalProject = useSelector((state: any) => state.resumeModel.personalProject);
  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      form.setFieldsValue(JSON.parse(JSON.stringify(personalProject)));
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
    updateResumeHook('personalProject', form.getFieldsValue());
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
      <Modal title="个人项目" {...searchBarProps} style={{ borderRadius: '10px' }} width={800} onOk={onFinish}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          initialValues={JSON.parse(JSON.stringify(personalProject))}
        >
          <Form.Item label="个人项目" name="content" rules={[rules]}>
            <MyEditor />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Project;
