/**
 * @author luof
 * @date 2024/9/18 20:58
 */
const jsonwebtoken = require('jsonwebtoken')

const jwt_key = 'this is my jsonwebtoken key'
/**
 * 生成token
 * @param id
 * @param username
 * @returns {*}
 */
function generateJwt(id, username) {
    return jsonwebtoken.sign({
        id, username
    }, jwt_key, {
        expiresIn: '6000s'
    })
}

/**
 * 验证token是否有效
 * @param token
 * @returns {boolean}
 */
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken.verify(token, jwt_key)
        return {
            id: decoded.id,
            username: decoded.username
        }
    } catch (err) {
        console.log('token verify err', err)
        return false
    }
}


module.exports = {generateJwt, verifyJwt}




