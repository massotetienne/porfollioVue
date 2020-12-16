const mongoose = require ('mongoose')

const MessageShema = new mongoose.Schema({
    
    name:String,
    email:String,
    message:String,
    createDate: {
        type:Date,
        default : new Date()
    },
    dateCreateDB: {
        type: String}
})

const Message = mongoose.model('Message',MessageShema)

module.exports = Message