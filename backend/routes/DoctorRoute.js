const express = require('express')
const { rawListeners } = require('../mongomodals/Doctormodal')
const doctor = require('../mongomodals/Doctormodal')
const Doctorroute = express.Router()

Doctorroute.get('/',(req,res)=>
{
    doctor.find().then(result=>res.send(result))
})

Doctorroute.post('/register',(req,res)=>
{
    const data = {...req.body,leavestatus:req.body.leavestatus?req.body.leavestatus:false,gender:req.body.gender?req.body.gender:"M",cost:req.body.cost?req.body.cost:null,specialisation:req.body.specialisation?req.body.specialisation:null,profileimg:req.body.profileimg?req.body.profileimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7TEM9d91DuHZgbmbtlx4tlSl-FJQKvREDA&usqp=CAU',likes:req.body.likes?req.body.likes:0,slot:req.body.slot?req.body.slot:'',bookingvisible:false}
    const doctordata = new doctor(data)
    doctordata.save().then(()=>res.send('success'))
})

Doctorroute.put('/editlike/:id',(req,res)=>
{
    doctor.findById(req.params.id).then(result=>{
        doctor.findByIdAndUpdate(req.params.id,{likes:result.likes+1}).then(()=>res.send("done"))
    })
    
})

Doctorroute.put('/addslot/:id',(req,res)=>
{
    const id = req.params.id
    const slot=req.query.slot
    const date=req.query.date
    doctor.findByIdAndUpdate(id,{slot:[{
        date:date,slot:slot
    }]}).then(r=>doctor.findById(id).then(result=>res.send(result)))
})

Doctorroute.get('/docdata/:id',(req,res)=>
{
    doctor.findById(req.params.id).then(r=>res.send(r))
})

Doctorroute.put('/doctorbooking/:id',(req,res)=>
{
    doctor.findById(req.params.id).then(r=>
        {
            doctor.findByIdAndUpdate(r.id,{bookingvisible:!r.bookingvisible}).then(re=>res.send(re))
        })
})


module.exports = Doctorroute