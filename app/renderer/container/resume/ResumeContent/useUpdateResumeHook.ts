import { useSelector, useDispatch } from 'react-redux';

/**
 * @description 更新简历信息
 */
function useUpdateResumeHook() {
  const updateBaseInfoHook = useUpdateBaseInfoHook();
  const updateEducationHook = useUpdateEducationHook();
  const updateSkillHook = useUpdateSkillHook();
  const updatePersonalProjectHook = useUpdatePersonalProjectHook();
  const updateWorkExperienceHook = useUpdateWorkExperienceHook();
  return <T>(stateKey: string, stateValue: T) => {
    if (stateKey) {
      if (stateKey === 'base') updateBaseInfoHook(stateValue);
      if (stateKey === 'education') updateEducationHook(stateValue);
      if (stateKey === 'skill') updateSkillHook(stateValue);
      if (stateKey === 'personalProject') updatePersonalProjectHook(stateValue);
      if (stateKey === 'workExperience') updateWorkExperienceHook(stateValue);
    }
  };
}

/**
 * @description 修改个人信息
 */
function useUpdateBaseInfoHook() {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return <T>(stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'base',
        values: {
          ...base,
          ...stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改教育经历
 */
function useUpdateEducationHook() {
  const dispatch = useDispatch();

  return <T>(stateValue: TSResume.Education[]) => {
    console.log('stateValue', stateValue);
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'education',
        values: [...stateValue],
      },
    });
  };
}

/**
 * @description 修改个人技能
 */
function useUpdateSkillHook() {
  const dispatch = useDispatch();
  const skill: TSResume.Skill = useSelector((state: any) => state.resumeModel.skill);

  return <T>(stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'skill',
        values: {
          ...skill,
          ...stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改个人项目
 */
function useUpdatePersonalProjectHook() {
  const dispatch = useDispatch();
  const personalProject: TSResume.PersonalProject = useSelector((state: any) => state.resumeModel.personalProject);

  return <T>(stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'personalProject',
        values: {
          ...personalProject,
          ...stateValue,
        },
      },
    });
  };
}

/**
 * @description 修改工作经历
 */
function useUpdateWorkExperienceHook() {
  const dispatch = useDispatch();
  const workExperience: TSResume.WorkExperience = useSelector((state: any) => state.resumeModel.workExperience);

  return <T>(stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'workExperience',
        values: {
          ...workExperience,
          ...stateValue,
        },
      },
    });
  };
}

export default useUpdateResumeHook;
