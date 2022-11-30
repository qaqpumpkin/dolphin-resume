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
      <Modal title="工作经历" {...searchBarProps} style={{ borderRadius: '10px' }}>
        <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
          {WorkExperience.map((item, index) => {
            return (
              <div key={index}>
                <Form.Item label="公司" name="company" rules={[rules]}>
                  <Input defaultValue={item.company} />
                </Form.Item>
                <Form.Item label="部门" name="department" rules={[rules]}>
                  <Input defaultValue={item.department} />
                </Form.Item>
                <Form.Item label="职位" name="post" rules={[rules]}>
                  <Input defaultValue={item.post} />
                </Form.Item>
                <Form.Item label="在职时间" name="workStatus" rules={[rules]}>
                  <RangePicker defaultValue={[moment(item.beginTime, dateFormat), moment(item.endTime, dateFormat)]} />
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
