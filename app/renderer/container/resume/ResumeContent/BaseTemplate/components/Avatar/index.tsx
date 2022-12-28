import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
import uploadIcon from '@assets/icon/upload.png';
import ImageUpload from '@src/container/components/MyUpload/ImageUpload';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import { Button } from 'antd';

function Avatar() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const updateResumeHook = useUpdateResumeHook();

  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook('base', { avatar: avatarUrl });
  };

  return (
    <div styleName="box">
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}
      {base?.avatar && (
        <div styleName="avatar">
          <img src={base?.avatar} />
          <div styleName="mask">
            <Button className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
