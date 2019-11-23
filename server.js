//引入包
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//引入路由
const loginRouter = require('./route/login')

//创建http实例
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//使用路由
app.use(loginRouter)

//启动服务
app.listen(9090)