import React, { CSSProperties, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker } from 'antd';
import '../modal.less';
import moment from 'moment';
import { Col, Row } from 'antd';
import MyEditor from '@src/container/components/MyEditor';

interface BaseInfoProps {
  onClose: () => void;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

function BaseInfo(props: BaseInfoProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const WorkExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
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
    console.log('value', value);
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
      <Modal title="工作经历" {...searchBarProps} style={{ borderRadius: '10px' }} width={600}>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={onFinish} autoComplete="off">
          {WorkExperience.map((item, index) => {
            return (
              <div styleName="dash-box" key={index}>
                <Row>
                  <Col span={12}>
                    <Form.Item label="公司" name="company" rules={[rules]}>
                      <Input defaultValue={item.company} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="部门" name="department" rules={[rules]}>
                      <Input defaultValue={item.department} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label="职位" name="post" rules={[rules]}>
                      <Input defaultValue={item.post} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="在职时间" name="workStatus" rules={[rules]}>
                      <RangePicker
                        defaultValue={[moment(item.beginTime, dateFormat), moment(item.endTime, dateFormat)]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="职位" name="post" rules={[rules]} labelCol={{ span: 3 }} wrapperCol={{ span: 19 }}>
                  <MyEditor editorHtml={item.workContent} onEditorChange={onEditorChange} />
                </Form.Item>
              </div>
            );
          })}
        </Form>
      </Modal>
    </>
  );
}

export default BaseInfo;
