// Node.js 模块化机制 CommonJS
const bodyParser = require('koa-bodyparser')
// 会话管理
const session = require('koa-session-minimal')
module.exports = app => {
    // 声明中间件
    app.use(bodyParser())
    app.use(session({
        // 服务器端session
        key: 'session-id',
        // 客户端
        cookie: {
            domain: 'localhost',
            path: '/',
            maxAge: 1000*60*30,
            httpOnly: true,
            overwrite: false
        }
    }))
}