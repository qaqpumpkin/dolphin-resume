import React, { useState } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import fileAction from '@common/utils/file';
import { createUID } from '@common/utils';
import { Button } from 'antd';
import { intToDateString } from '@common/utils/time';
import { DownloadOutlined } from '@ant-design/icons';
import { getAppPath } from '@common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';

function ResumeAction() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const resume = useSelector((state: any) => state.resumeModel);
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  // 返回首页
  const onBack = () => history.push(ROUTER.root);

  // 导出PDF
  const exportPdf = () => {
    toPrintPdf(`${base.name} ${base.phone} ${base.email}`);
    setShowModal(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
          saveResumeJson(`${appPath}resumeCache`);
        });
      }
    });
  };

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.name}_${base?.phone}_${base?.email}_${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      fileAction?.write(`${resumeSavePath}/${prefix}`, resume, 'utf8');
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/resumeCache`)
        .then((path) => {
          if (path) {
            fileAction?.write(`${path}/${prefix}`, resume, 'utf8');
          }
        })
        .catch(() => {
          console.log('创建文件夹失败');
        });
    }
  };

  return (
    <div styleName="actions">
      <Button styleName="download" shape="round" icon={<DownloadOutlined />} size="large" onClick={exportPdf}>
        下载
      </Button>
    </div>
  );
}
export default ResumeAction;
