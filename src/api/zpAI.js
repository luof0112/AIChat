/**
 * @author luof
 * @date 2024/9/18 21:24
 */
import request from "@/utils/request.js";

/**
 * 生成对话
 * @param data
 * @returns {*}
 */
export function reqGenerateChat(data) {
    return request({
        method: 'post',
        url: '/v1/zpAiModel',
        data
    })
}
