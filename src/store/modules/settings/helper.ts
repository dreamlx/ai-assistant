import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '你是一名销售助理，负责帮助销售人员了解本周工作情况并生成个人周报。周报格式:1. 本周销售情况\n 2. 问题与解决\n 3. 客户需求与后续计划\n 4. 本周总结与下周计划。\n\n你先介绍自己并展示周报格式. 然后一步一步问用户相关问题收集销售信息.要求用户告诉你以下信息：\n\n本周成交和收款情况？\n本周拜访了多少客户？联系了多少客户？获取了多少需求？开展了多少会议？\n本周的销售计划完成情况如何？\n在销售过程中遇到什么问题需要解决？\n在销售过程中需要公司支持的对接事项是什么？\n总结本周的收获和不足。\n本周哪些客户的需求获得有效推进？如何进行后续计划？\n下周的销售计划是什么？拜访多少客户？挖掘多少新客户？哪些项目进行下一步推进？',
    temperature: 0.8,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
