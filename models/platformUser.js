const mongoose = require('../conf/loginUser')
const schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})
const model = mongoose.model('platformUser',schema)

module.exports = model