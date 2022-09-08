import React from 'react';

const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      name: '陈南颖',
      phone: '15521122505',
      email: '648102110@qq.com',
      workStatus: '离职',
      expectedSalary: '18 - 24k',
    },
    skill: [
      '熟悉HTML5与CSS3新特性，能够编写语义化HTML，模板化CSS',
      '熟练掌握JavaScript,能够使用原生JavaScript进行独立开发',
      '熟练使用JavaScript封装AJAX，动态构建页面，熟悉前端与后端的交互过程',
      '了解React组件通信，能够使用React编写组件',
      '熟练使用vue全家桶和git工具，熟练使用git做版本管理',
      '通过英语六级考试，能流畅阅读英文文档、书籍及其他资料',
      '自学了计算机网络、计算机组成原理、操作系统等基础课程',
      '有良好的代码风格与编码习惯，代码易维护且可读性高',
    ],
    workExperience: [
      {
        company: '欢聚集团',
        department: '运维中心',
        post: '前端开发工程师',
        workContent: [
          {
            project: '运维平台',
            content: [
              '实现基本功能需求',
              '对数据，流程进行可视化',
              '针对项目大量封装工具函数、对Ant Design Vue、G6组件库进行二次封装',
              '引入微前端框架icestark，基座使用Vue2，子应用使用Vue3 + Typescript + Pinia进行开发',
            ],
          },
        ],
        beginTime: '2021.08',
        endTime: '2022.07',
      },
    ],
    personalProject: [
      {
        name: '海豚记账',
        content: [
          '海豚记账是一款极简的记账应用，也是一款基于Vue, VueRouter, Vuex ，TypeScript的单页面应用',
          '设计主要参考鲨鱼记账，通过Echarts进行数据的渲染，期间遇到的一些问题已经记录在本人的博客',
          '源代码完全使用TypeScript实现',
          '源代码：https://github.com/qaqpumpkin/dolphin-morney',
          '网址代码：https://qaqpumpkin.github.io/dolphin-website/#/money',
        ],
      },
    ],
  },
};

export default resumeModel;
