import React from 'react';
import './index.less';

function Job() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历</p>
      <div styleName="job">
        <div styleName="jobTitle">
          <strong>欢聚集团</strong>
          <div>2021.08 - 2022.07</div>
        </div>
        <div styleName="jobTitle">
          <div>运维中心</div>
          <div>广州</div>
        </div>
        <div styleName="jobTitle">项目内容：</div>
      </div>
      <ul styleName="skill">
        <li styleName="item">实现基本功能需求</li>
        <li styleName="item">对数据，流程进行可视化</li>
        <li styleName="item">针对项目大量封装工具函数、对Ant Design Vue、G6组件库进行二次封装</li>
        <li styleName="item">引入微前端框架icestark，基座使用Vue2，子应用使用Vue3 + Typescript + Pinia进行开发</li>
        <li styleName="item">对大量可能引起误操作的交互进行了优化，使用户能更准确地完成自己的工作</li>
      </ul>
    </div>
  );
}

export default Job;
