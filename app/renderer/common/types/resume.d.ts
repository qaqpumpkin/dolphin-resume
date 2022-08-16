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
    username: string;
    /**
     * @description 地区
     */
    area?: string;
    /**
     * @description 学校
     */
    school?: string;
    /**
     * @description 学年
     */
    onSchoolTime?: {
      /**
       * @description 入校时间
       */
      beginTime: string | number | null;
      /**
       * @description 离校时间
       */
      endTime: string | number | null;
    };
    /**
     * @description 专业
     */
    major?: string;
    /**
     * @description 学位
     */
    degree?: string;
  }

  /**
   * @description 联系方式
   */
  export interface Contact {
    /**
     * @description 电话号码
     */
    phone?: string;
    /**
     * @description 邮箱
     */
    email?: string;
  }

  /**
   * @description 工作经验
   */
  export interface WorkExperience {
    /**
     * @description 部门
     */
    department?: string;
    /**
     * @description 职位
     */
    post?: string;
    /**
     * @description 主要工作
     */
    content?: string;
    parseContent?: string[];
    /**
     * @description 开始时间
     */
    beginTime?: number | string | undefined;
    /**
     * @description 结束时间
     */
    endTime?: number | string | undefined;
    /**
     * @description 额外补充内容
     */
    supplement?: string;
    /**
     * @description 最后修改时间
     */
    date?: number;
  }

  /**
   * @description 个人项目
   */
  export interface personalProject {
    /**
     * @description 项目名
     */
    projectName?: string;
    /**
     * @description 职位
     */
    post?: string;
    /**
     * @description 主要工作
     */
    content?: string;
    parseContent?: string[];
  }

  /**
   * @description 一份完整的简历信息
   */
  export interface IntactResume {
    base: Base;
    skill: string;
    skillList: string[];
    contact: Contact;
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
