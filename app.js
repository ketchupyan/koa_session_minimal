const Koa = require('koa')
const app = new Koa()
// Server 端 node.js     client 端 dom ajax js
// 向引入的模块传参
// 路由
require('./config')(app)
require('./routes')(app)
app.listen(3000)