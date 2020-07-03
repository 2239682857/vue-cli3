/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 后台管理系统服务器地址
export const baseUrl = 'http://192.168.92.198:8009'

export const backupBaseUrl = baseUrl
export const global = ''
export default {
  baseUrl,
  backupBaseUrl,
  global
}
