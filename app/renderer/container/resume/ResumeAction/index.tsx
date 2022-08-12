import React, { useState } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Button } from 'antd';

function ResumeAction() {
  const history = useHistory();
  const onExport = () => {};
  const [size] = useState<SizeType>('large');
  return (
    <div styleName="actions">
      <Button styleName="download" shape="round" icon={<DownloadOutlined />} size="large">
        下载
      </Button>
    </div>
  );
}
export default ResumeAction;
