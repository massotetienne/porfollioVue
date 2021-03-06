const mongoose = require ('mongoose')

const MessageShema = new mongoose.Schema({
    
    name:String,
    email:String,
    sujet:String,
    text:String,
    tel:Number,
    createDate: {
        type:Date,
        default : new Date()
    },
    dateCreateDB: {
        type: String}
})

const Message = mongoose.model('Message',MessageShema)

module.exports = Message