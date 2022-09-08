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
     * @description 期望薪资
     */
    expectedSalary: string;
  }

  export interface WorkContent {
    /**
     * @description 项目
     */
    project?: string;
    /**
     * @description 内容
     */
    content: string[];
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
    workContent?: WorkContent[];
    /**
     * @description 开始时间
     */
    beginTime?: number | string | undefined;
    /**
     * @description 结束时间
     */
    endTime?: number | string | undefined;
  }

  /**
   * @description 个人项目
   */
  export interface personalProject {
    /**
     * @description 项目名
     */
    name?: string;
    /**
     * @description 项目内容
     */
    content?: string[];
  }

  /**
   * @description 一份完整的简历信息
   */
  export interface IntactResume {
    base: Base;
    skill: string[];
    workExperience?: WorkExperience[];
    personalProject?: personalProject[];
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
