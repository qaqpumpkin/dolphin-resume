declare namespace TSResume {
  /**
   * @description 基本信息
   */
  export interface Base {
    /**
     * @description 头像
     */
    avatar?: string;
    /**
     * @description 姓名
     */
    name: string;
    /**
     * @description 电话号码
     */
    phone: string;
    /**
     * @description 邮箱
     */
    email: string;
    /**
     * @description 工作状态
     */
    workStatus: string;
    /**
     * @description 期望薪资(最小)
     */
    expectedMinSalary: string;
    /**
     * @description 期望薪资(最高)
     */
    expectedMaxSalary: string;
  }
  /**
   * @description 教育经历
   */
  export interface Education {
    /**
     * @description 学校名称
     */
    school: string;
    /**
     * @description 专业
     */
    major: string;
    /**
     * @description 学历
     */
    degree: string;
    /**
     * @description 教育时间
     */
    educationTime: string[];
  }
  /**
   * @description 个人技能
   */
  export interface Skill {
    content: string;
  }
  /**
   * @description 工作经验
   */
  export interface WorkExperience {
    /**
     * @description 公司
     */
    company?: string;
    /**
     * @description 部门
     */
    department?: string;
    /**
     * @description 职位
     */
    post?: string;
    /**
     * @description 工作内容
     */
    workContent: string;
    /**
     * @description 工作时间
     */
    workTime: string[];
  }

  /**
   * @description 个人项目
   */
  export interface PersonalProject {
    /**
     * @description 项目内容
     */
    content: string;
  }

  /**
   * @description 一份完整的简历信息
   */
  export interface IntactResume {
    base: Base;
    skill: Skill;
    education: Education[];
    workExperience?: WorkExperience[];
    personalProject?: PersonalProject;
  }

  /**
   * @description 简历模版
   */
  export interface TemplateItem {
    /**
     * @description 唯一标识
     */
    id: string;
    /**
     * @description 模版名
     */
    name: string;
    /**
     * @description 模版封面
     */
    cover: string;
  }

  /**
   * @description 简历工具条模块
   */
  export interface SliderItem {
    /**
     * @description 唯一标识
     */
    key: string;
    /**
     * @description 模块名
     */
    name: string;
    /**
     * @description 描述
     */
    summary: string;
    /**
     * @description 是否必须
     */
    require: boolean;
  }
}
