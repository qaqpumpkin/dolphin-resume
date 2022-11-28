import React, { useEffect, useState } from 'react';
import './index.less';
import { onAddToolbar, onDeleteToolbar } from './utils';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import { useDispatch } from 'react-redux';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';

function ResumeToolbar() {
  const sliderHeight = document.body.clientHeight - 180;

  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      const _addToolbarList = RESUME_TOOLBAR_LIST.filter((item) => item.require);
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(RESUME_TOOLBAR_LIST.filter((item) => !item.require));
      changeResumeToolbarKeys(_addToolbarList.map((s) => s.key));
    }
  }, []);

  const changeResumeToolbarKeys = (moduleKeys: string[]) => {
    if (moduleKeys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: moduleKeys,
        },
      });
    }
  };

  const toolbarList = (slider: TSResume.SliderItem) => {
    return (
      <div styleName="box" key={slider.key}>
        <div styleName="info">
          <i styleName="icon" />
          <div styleName="text">
            <div styleName="name">{slider.name}</div>
            <div styleName="summary">{slider.summary}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div styleName="slider" style={{ height: sliderHeight }}>
      {!!addToolbarList.length && (
        <div styleName="module">
          <div styleName="title">
            <span styleName="line" />
            已添加模块
          </div>
          <div styleName="content">
            {addToolbarList.map((addSlider: TSResume.SliderItem) => {
              return (
                <div
                  styleName="box"
                  key={addSlider.key}
                  onClick={() => {
                    console.log('addSlider.key', addSlider.key);
                    Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                      form_name: addSlider.key,
                    });
                  }}
                >
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{addSlider.name}</div>
                      <div styleName="summary">{addSlider.summary}</div>
                    </div>
                    {addSlider.require && <div styleName="tips">必选项</div>}
                    {!addSlider.require && (
                      <div styleName="action">
                        <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                        <i
                          styleName="delete"
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation && e.stopPropagation();
                            onDeleteSliderAction(addSlider);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {!!unAddToolbarList.length && (
        <div styleName="module">
          <div styleName="title un-first">
            <span styleName="line" />
            未添加模块
          </div>
          <div styleName="content">
            {unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
              return (
                <div styleName="box" key={unAddSlider.key} onClick={() => onAddSliderAction(unAddSlider)}>
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{unAddSlider.name}</div>
                      <div styleName="summary">{unAddSlider.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeToolbar;