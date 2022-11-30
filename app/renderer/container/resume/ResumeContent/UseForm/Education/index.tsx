import React, { CSSProperties, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input, message, DatePicker } from 'antd';
import '../modal.less';
import moment from 'moment';
import customParseFormat from 'dayjs/plugin/customParseFormat';

interface BaseInfoProps {
  onClose: () => void;
}

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

function BaseInfo(props: BaseInfoProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const rules = { required: true, message: '请输入' };
  const { onClose } = props;
  const education: TSResume.Education[] = useSelector((state: any) => state.resumeModel.education);
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
  return (
    <>
      {contextHolder}
      <Modal title="教育经历" {...searchBarProps} style={{ borderRadius: '10px' }}>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
          {education.map((item, index) => {
            return (
              <div key={index}>
                <Form.Item label="学校" name="name" rules={[rules]}>
                  <Input defaultValue={item.school} />
                </Form.Item>
                <Form.Item label="专业" name="major" rules={[rules]}>
                  <Input defaultValue={item.major} />
                </Form.Item>
                <Form.Item label="学历" name="email" rules={[rules]}>
                  <Input defaultValue={item.degree} />
                </Form.Item>
                <Form.Item label="教育时间" name="workStatus" rules={[rules]}>
                  <RangePicker
                    defaultValue={[
                      moment(item.educationTime[0], dateFormat),
                      moment(item.educationTime[1], dateFormat),
                    ]}
                  />
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
