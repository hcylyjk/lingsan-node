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

//设置跨域问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
  
//使用路由
app.use(loginRouter)

//启动服务
app.listen(9090)