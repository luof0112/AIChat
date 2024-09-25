/**
 * @Author        luof
 * @Date          2024-09-20 18:52:20
 * @Title
 */
const axios = require('axios')
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
/**
 * curl --location 'https://open.bigmodel.cn/api/paas/v4/chat/completions' \
 * --header 'Authorization: Bearer <你的apikey>' \
 * --header 'Content-Type: application/json' \
 * --data '{
 *     "model": "glm-4",
 *     "messages": [
 *         {
 *             "role": "user",
 *             "content": "你好"
 *         }
 *     ]
 * }'
 */

async function generateAiResponse(content) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
            headers: {
                'Authorization': `Bearer ${secretKey}`,
            },
            data: {
                "model": "glm-4-plus",
                'messages': [
                    {
                        'role': 'user',
                        'content': content
                    }
                ],
                'stream': 'True',
            }
        })
        //返回结果和提取花费的total_tokens
        const result = response.data;
        const total_tokens = typeof result === 'string'
            ? result.match(/"total_tokens":(\d+)/)?.[1]*1
            : undefined;
        return {
            result, total_tokens
        }
    } catch (error) {
        console.log(error)
        return error
    }

}


module.exports = {generateAiResponse}
