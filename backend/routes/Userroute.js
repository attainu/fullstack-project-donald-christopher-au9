const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");

Userroute.put("/addappointment/:id", (req, res) => {
  const userid = req.params.id;
  const doctorid = req.body.doctor._id;
  const appointslot = req.body.slot[0];
  const patientname = req.body.patientname;
  const doctorname = req.body.doctor.fullname;
  doctor
    .findByIdAndUpdate(doctorid, {
      $push: {
        appointments: {
          patientname,
          slot: appointslot,
          userid,
        },
      },
    })
    .then((doctordata) =>
      doctor
        .findByIdAndUpdate(userid, {
          $push: {
            appointments: {
              doctorname,
              slot: appointslot,
              doctorid,
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

module.exports = Userroute;
