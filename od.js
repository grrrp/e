const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: String,
    mes: {
        type:String,
        lowercase:true,
        },
        tprice: Number,
        email:String,
        address:String,
        author: String,  
        t:String,  
        tt:String,
        cont:[String],
    createdAt:{
       type: Date,
       immutable:true,
       default:()=>Date.now()
    }
})

module.exports=mongoose.model("Od",userSchema)