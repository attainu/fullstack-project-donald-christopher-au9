const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");
const mongoose = require("mongoose");

Userroute.put("/addappointment/:id", (req, res) => {
  const userid = req.params.id;
  const doctorid = req.body.doctor._id;
  const appointslot = req.body.slot;
  const patientname = req.body.patientname;
  const doctorname = req.body.doctor.fullname;
  const doctorimg = req.body.doctorimg;
  const specialisation = req.body.specialisation;
  const id = new mongoose.mongo.ObjectId();
  // console.log(id);
  doctor
    .findByIdAndUpdate(doctorid, {
      $push: {
        appointments: {
          id,
          patientname,
          slot: appointslot,
          userid,
          profileimg: doctorimg,
          specialisation,
        },
      },
    })
    .then((doctordata) =>
      doctor
        .findByIdAndUpdate(userid, {
          $push: {
            appointments: {
              id,
              doctorname,
              slot: appointslot,
              doctorid,
              specialisation,
            },
          },
        })
        .then((r) =>
          res.send({
            doctordata: doctordata,
            userdata: r,
            confirmationmsg: "yes",
          })
        )
    );
});
Userroute.get("/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => res.send(r));
});

Userroute.put("/deleteappointent/:id", (req, res) => {
  let query = req.query.id;
  doctor
    .findById(req.params.id, {
      $pullAll: { appointments: [{ id: query }] },
    })
    .then((result) => {
      res.send(result);
    });
});
Userroute.put("/disable", (req, res) => {
  doctor
    .updateMany({ bookingvisible: false })
    .then((r) => res.send("disabled"));
});

module.exports = Userroute;
