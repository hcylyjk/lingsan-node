const express = require('express')
const bcryptjs = require('bcryptjs')

const router = express.Router()
//引入数据表
const platformUser = require('../models/platformUser')

//平台端登录
router.post('/platformLogin',async(req,res)=>{
    // console.log(req.body);
    // const user = new platformUser({
    //     username: req.body.username,
    //     password:await bcryptjs.hash(req.body.password,12)
    // })
    // await user.save()
    let username = req.body.username
    let password = req.body.password
    //console.log(username,password)
    let isOk = false
    let user = await platformUser.findOne({username})
    if(user){
        isOk = await bcryptjs.compare(password,user.password)
    }
    if(isOk){
        res.send({
            code:"0",
            msg: "登录成功",
            data:{
                _id:user._id,
                username:username,
            }
        })
    }else{
        res.send({
            code:"1",
            mag:"登录失败",
        })
    }
    //res.send('ok')
})


module.exports = router