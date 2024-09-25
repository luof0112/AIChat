/**
 * @author luof
 * @date 2024/9/18 21:04
 */
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const {generateJwt, verifyJwt} = require('./jwt')
const {generateAiResponse} = require('./ap_ai') //ai模型

const app = express()

app.use(express.json())
app.use(cors({
    withCredentials:true
}))

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'zp_ai',
    charset: 'utf8mb4',
});

/**
 * 查询函数
 * @param sql
 * @param params
 * @returns {Promise<unknown>}
 */
function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err); // 连接获取失败
            }

            connection.query(sql, params, (error, results) => {
                // 释放连接
                connection.release();

                if (error) {
                    reject(error); // 查询出错
                } else {
                    resolve(results); // 返回结果
                }
            });
        });
    });
}

/**
 * 全局中间件拦截
 */
app.use((req, res, next) => {
    if (req.url === '/v1/user/login') {
        next()
    } else {
        const token = req.headers.authorization?.split(' ')[1]
        try {
            const {id,username} = verifyJwt(token)
            if (!id || !username) {
                return res.status(401).send(new R().error('Token verification failed'));
            } else {
                next()
            }
        } catch (e) {
            console.log(e)
            return res.status(401).send(new R().error('Token verification failed'));
        }
    }
})


/**
 * 从请求头中获取token,并解析
 * @param req
 * @returns {{id, username}}
 */
function getUserInfoByToken(req) {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const {id, username} = verifyJwt(token);
        return {id, username, token}
    } catch (e) {
        console.log(e);
    }
}

/**
 * 响应实体
 */
class R {
    constructor(code = 200, message, data) {
        this.code = code
        this.message = message
        this.data = data
    }

    ok(message, data) {
        return new R(200, message, data)
    }

    error(message, data) {
        return new R(400, message, data)
    }
}

// 定义一个中间件来处理所有未捕获的错误
app.use((err, req, res, next) => {
    console.error('错误时间:', new Date().toString());
    console.error(err.stack); // 在服务器上记录错误信息
    res.status(500).send(new R().error('服务器内部错误')); // 向用户返回错误信息
});

/**
 * 登录
 */
app.post('/v1/user/login', async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const sql = 'SELECT * FROM user WHERE username=?'
        const query_result = await query(sql, [username])
        if (query_result[0]?.username === username && query_result[0]?.password === password) {
            const token = generateJwt(query_result[0].id, username)
            //更新数据库token
            const sql = 'UPDATE user SET token=? WHERE id=?'
            const update_result = await query(sql, [token, query_result[0].id])
            res.send(new R().ok('登录成功', token))
        } else {
            res.send(new R().error('登录失败,账户或者密码错误'))
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(new R().error('服务端错误:' + error.message))
    }

})

/**
 * 生成ai对话
 */
app.post('/v1/zpAiModel', async (req, res) => {
    try {
        let {content, uuid} = req.body
        const {id, username, token} = getUserInfoByToken(req)
        if (content == null || content.trim() === '') {
            const customResult = ['Hello! Nice to meet you. How can I help you.']

            res.send(new R().ok('generate chat', {
                uuid,
                userContent: content,
                role: "bot",
                total_tokens: 0,
                replyContent: customResult
            }))
            return
        }
        //调用AI模型
        const {result, total_tokens} = await generateAiResponse(content);

        //插入记录
        async function insertChat(uuid, user_id, username, token, user_content, reply_content, result_content, headers, user_ip) {
            const sql = "INSERT INTO chat(uuid, user_id, username, token, user_content, reply_content,result_content, headers,user_ip) VALUES(?,?,?,?,?,?,?,?,?)";
            await query(sql, [uuid, user_id, username, token, user_content, reply_content, result_content, headers, user_ip]);
        }

        const reply_content = result.toString(); //流式响应体
        const headers = JSON.stringify(req.headers); //请求头
        const user_ip = req.ip //用户IP地址
        //响应内容
        const res_content = result.split('\n')
            .filter(line => line.startsWith('data:') && line !== 'data: [DONE]')  // 只保留以 'data:' 开头的行，忽略 'data: [DONE]'
            .map(line => {
                const jsonPart = line.slice(5).trim(); // 去掉 'data: ' 前缀
                const json = JSON.parse(jsonPart); // 解析 JSON
                return json.choices[0].delta.content; // 提取 content
            });
        //简单回复内容
        const result_content = res_content.map(item => item).join('')

        await insertChat(uuid, id, username, token, content, reply_content, result_content, headers, user_ip);

        res.send(new R().ok('generate chat', {
            uuid,
            userContent: content,
            role: "bot",
            total_tokens,
            replyContent: res_content
        }))
    } catch (error) {
        console.log(error)
        res.status(500).send(new R().error('服务端错误:' + error.message))
    }
})


app.listen(6633, () => {
    console.log('app running in 6633')
})



