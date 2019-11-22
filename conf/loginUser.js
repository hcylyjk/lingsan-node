//创建的是平台端，商家端用户的信息的数据库
//引入mongoose
const mongoose = require('mongoose')

//构建链接地址
const uri = 'mongodb://127.0.0.1:27017/loginUser'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('数据库连接成功');
}).catch(err =>{
    console.log('数据库连接失败');
    console.log(err);
})

module.exports = mongoose