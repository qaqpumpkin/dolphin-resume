import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker, Button, Col, Row } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import '../modal.less';
import moment from 'moment';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import MyEditor from '@src/container/components/MyEditor';

interface WorkTimeProps {
  onClose: () => void;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

function WorkExperience(props: WorkTimeProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const updateResumeHook = useUpdateResumeHook();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const [form] = Form.useForm();
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
  useEffect(() => {
    let isUnmounted = false;
    if (!isUnmounted) {
      const formWorkExperience = JSON.parse(JSON.stringify(workExperience)).map((item: TSResume.WorkExperience) => {
        // @ts-ignore
        item.workTime = [moment(item.workTime[0], dateFormat), moment(item.workTime[1], dateFormat)];
        return item;
      });
      form.setFieldsValue([...formWorkExperience]);
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
    const formWorkExperience = JSON.parse(JSON.stringify(form.getFieldsValue().workExperience)).map(
      (item: TSResume.WorkExperience) => {
        item.workTime = [moment(item.workTime[0]).format(dateFormat), moment(item.workTime[1]).format(dateFormat)];
        return item;
      }
    );
    updateResumeHook('workExperience', formWorkExperience);
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
      <Modal title="工作经历" {...searchBarProps} style={{ borderRadius: '10px' }} onOk={onFinish} width={800}>
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} autoComplete="off">
          <Form.List
            name="workExperience"
            initialValue={JSON.parse(JSON.stringify(workExperience)).map((item: TSResume.WorkExperience) => {
              // @ts-ignore
              item.workTime = [moment(item.workTime[0], dateFormat), moment(item.workTime[1], dateFormat)];
              return item;
            })}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...resetField }, index, arr) => {
                  return (
                    <div styleName="content" key={index}>
                      <div styleName="editor-box">
                        <Row>
                          <Col span={12}>
                            <Form.Item label="公司" name={[name, 'company']} rules={[rules]}>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label="部门" name={[name, 'department']} rules={[rules]}>
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label="职位" name={[name, 'post']} rules={[rules]}>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label="在职时间" name={[name, 'workTime']} rules={[rules]}>
                              <RangePicker format="YYYY-MM-DD" />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Form.Item
                            label="工作内容"
                            name={[name, 'workContent']}
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            rules={[rules]}
                          >
                            <MyEditor />
                          </Form.Item>
                        </Row>
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

export default WorkExperience;
