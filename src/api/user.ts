/**
 * 用户模块请求封装
 */
import request from '@/utils/request'

// 登录
export const login = () => {
  return request.get<{status:number, msg:string, data:''}>('')
}
