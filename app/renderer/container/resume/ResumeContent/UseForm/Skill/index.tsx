import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker } from 'antd';
import '../modal.less';
import MyEditor from '../../../../components/MyEditor';

interface ProjectProps {
  onClose: () => void;
}

function Project(props: ProjectProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const skill: TSResume.Skill = useSelector((state: any) => state.resumeModel.skill);
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
  const onEditorChange = (value: string) => {
    console.log(value);
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
      <Modal title="专业技能" {...searchBarProps} style={{ borderRadius: '10px' }} width={800}>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
          <Form.Item label="专业技能" name="workStatus" rules={[rules]}>
            <MyEditor editorHtml={skill.content} onEditorChange={onEditorChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Project;
