import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import '../modal.less';
import moment from 'moment';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface EducationProps {
  onClose: () => void;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

function Education(props: EducationProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const updateResumeHook = useUpdateResumeHook();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const [form] = Form.useForm();
  const education: TSResume.Education[] = useSelector((state: any) => state.resumeModel.education);
  console.log('education', education);
  useEffect(() => {
    let isUnmounted = false;
    console.log('isUnmounted', isUnmounted);
    if (!isUnmounted) {
      education.map((item, index) => {
        // @ts-ignore
        item.educationTime = [moment(item.educationTime[0], dateFormat), moment(item.educationTime[1], dateFormat)];
        return item;
      });
      console.log('education', education);
      form.setFieldsValue([...education]);
    }
    return () => {
      console.log('unMount');
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
    const { education } = form.getFieldsValue();
    console.log('education', education);
    updateResumeHook(
      'education',
      JSON.parse(JSON.stringify(education)).map((item) => {
        item.educationTime = [
          moment(item.educationTime[0]).format(dateFormat),
          moment(item.educationTime[1]).format(dateFormat),
        ];
        return item;
      })
    );
    messageApi
      .open({
        type: 'success',
        content: '编辑成功',
      })
      .then(() => {
        onClose();
      });
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
      <Modal title="教育经历" {...searchBarProps} style={{ borderRadius: '10px' }} onOk={onFinish} width={600}>
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} autoComplete="off">
          <Form.List name="education" initialValue={education}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...resetField }, index, arr) => {
                  return (
                    <div styleName="content" key={index}>
                      <div styleName="dash-box">
                        <Form.Item label="学校" name={[name, 'school']} rules={[rules]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="专业" name={[name, 'major']} rules={[rules]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="学历" name={[name, 'degree']} rules={[rules]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="教育时间" name={[name, 'educationTime']} rules={[rules]}>
                          <RangePicker format="YYYY-MM-DD" />
                        </Form.Item>
                      </div>
                      <Button
                        styleName="edit-btn"
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={() => add()}
                      />
                      {index !== 0 && (
                        <Button
                          styleName="edit-btn"
                          danger
                          shape="circle"
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                        />
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    </>
  );
}

export default Education;
