import React from 'react';
import './index.less';

function Education() {
  return (
    <div styleName="content">
      <p styleName="label">个人项目</p>
      <div>
        <strong>海豚记账</strong>
      </div>
      <ul styleName="project">
        <li styleName="item">
          海豚记账是一款极简的记账应用，也是一款基于Vue, VueRouter, Vuex ，TypeScript的单页面应用
        </li>
        <li styleName="item">
          设计主要参考鲨鱼记账，通过Echarts进行数据的渲染，期间遇到的一些问题已经记录在本人的博客
        </li>
        <li styleName="item">源代码完全使用TypeScript实现</li>
        <li styleName="item">源代码：https://github.com/qaqpumpkin/dolphin-morney</li>
        <li styleName="item">网址代码：https://qaqpumpkin.github.io/dolphin-website/#/money</li>
      </ul>
    </div>
  );
}

export default Education;
