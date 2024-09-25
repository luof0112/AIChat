/*
 * @Author       : luof
 * @Date         : 2024-09-24 11:23:22
 * @LastEditTime : 2024-09-24 11:23:22
 * @Description  :
 * @FilePath     : \chatVue\src\api\user.js
 * Flush with the spring breeze, the horse's hooves fly fast; in a day, I have seen all of Chang'an.
 */
import request from "@/utils/request.js";


/**
 * 生成对话
 * @param data
 * @returns {*}
 */
export function reqUserLogin(data) {
  return request({
    method: "post",
    url: "/v1/user/login",
    data,
  })
}
