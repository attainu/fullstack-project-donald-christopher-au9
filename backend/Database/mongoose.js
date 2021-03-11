
const mongoose = require("mongoose")
const mongourl ='mongodb://localhost:27017/Practo'

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
    useFindAndModify:true
})

module.exports=mongoose