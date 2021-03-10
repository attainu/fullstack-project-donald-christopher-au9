const mongoose = require('mongoose')

const doctorschema = new mongoose.Schema({
    fullname:{
        type:String
    },
    profileimg:{
        type:String
    },
    appointments:{
        type:[{
            type:Object
        }]
    },
    number:{
        type:Number
    },
    hospitalname:{
        type:String
    },
    city:{
        type:String
    },
    leavestatus:{
        type:Boolean
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    experience:{
        type:Number
    },
    registered:{
        type:Boolean
    },
    cost:{
        type:Number
    },
    specialisation:{
        type:String
    },
    likes:{
        type:Number
    },
    slot:{
        type:[{
            type:Object
        }]
    },
    bookingvisible:{
        type:Boolean
    }
})

const doctor = mongoose.model("doctorsdata",doctorschema)

module.exports=doctor