import React, { useState } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { toPrintPdf } from '@src/common/utils/htmlToPDF';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  const onExport = () => {
    toPrintPdf(`${base?.name}-${base?.phone}-${base?.email}`);
  };

  return (
    <div styleName="actions">
      <Button styleName="download" shape="round" icon={<DownloadOutlined />} size="large" onClick={onExport}>
        下载
      </Button>
    </div>
  );
}
export default ResumeAction;
