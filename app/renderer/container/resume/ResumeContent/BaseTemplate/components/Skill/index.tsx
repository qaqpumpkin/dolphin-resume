import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">专业技能</p>
      <ul styleName="skill">
        <li styleName="item">熟悉HTML5与CSS3新特性，能够编写语义化HTML，模板化CSS</li>
        <li styleName="item">熟练掌握JavaScript,能够使用原生JavaScript进行独立开发</li>
        <li styleName="item">熟练使用JavaScript封装AJAX，动态构建页面，熟悉前端与后端的交互过程</li>
        <li styleName="item">了解React组件通信，能够使用React编写组件</li>
        <li styleName="item">熟练使用vue全家桶和git工具，熟练使用git做版本管理</li>
        <li styleName="item">通过英语六级考试，能流畅阅读英文文档、书籍及其他资料</li>
        <li styleName="item">自学了计算机网络、计算机组成原理、操作系统等基础课程</li>
        <li styleName="item">有良好的代码风格与编码习惯，代码易维护且可读性高</li>
      </ul>
    </div>
  );
}

export default Skill;
