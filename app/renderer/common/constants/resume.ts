export const RESUME_TOOLBAR_MAPS = {
  baseInfo: 'baseInfo', // 个人信息
  education: 'education', // 教育信息
  project: 'project', // 个人项目
  job: 'job', // 工作经历
  skill: 'skill', // 专业技能
};

const RESUME_TOOLBAR_LIST: TSResume.SliderItem[] = [
  {
    key: RESUME_TOOLBAR_MAPS.baseInfo,
    name: '个人信息',
    summary: '更好介绍自己，机会会更多',
    require: true,
  },
  {
    key: RESUME_TOOLBAR_MAPS.education,
    name: '教育信息',
    summary: '介绍你的学校和专业信息',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.project,
    name: '个人项目',
    summary: '上传作品链接，展示个人实力',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.job,
    name: '工作经历',
    summary: '展示申请岗位相关的经验与能力',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.skill,
    name: '专业技能',
    summary: '展示具备的技能，突出你的能力',
    require: false,
  },
];

export default RESUME_TOOLBAR_LIST;
