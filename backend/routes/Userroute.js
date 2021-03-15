const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const filetype = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/PNG") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: 1024 * 1024 * 5,
  fileFilter: filetype,
});

Userroute.put("/addappointment/:id", (req, res) => {
  const userid = req.params.id;
  const doctorid = req.body.doctor._id;
  const appointslot = req.body.slot;
  const patientname = req.body.patientname;
  const doctorname = req.body.doctor.fullname;
  const doctorimg = req.body.doctorimg;
  const specialisation = req.body.specialisation;
  const appointid = new mongoose.mongo.ObjectId();
  // console.log(userid);
  doctor
    .findByIdAndUpdate(doctorid, {
      $push: {
        appointments: {
          appointid: appointid,
          patientname: patientname,
          slot: appointslot,
          userid,
          profileimg: doctorimg,
          specialisation,
        },
      },
    })
    .then((doctorinfo) =>
      doctor
        .findByIdAndUpdate(userid, {
          $push: {
            appointments: {
              appointid: appointid,
              doctorname,
              slot: appointslot,
              doctorid,
              specialisation,
            },
          },
        })
        .then((r) =>
          res.send({
            doctordata: doctorinfo,
            userdata: r,
            confirmationmsg: "yes",
          })
        )
    );
});
Userroute.get("/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => res.send(r));
});

Userroute.put("/disable", (req, res) => {
  doctor
    .updateMany({ bookingvisible: false })
    .then((r) => res.send("disabled"));
});

Userroute.get("/delete/:id", async (req, res) => {
  const result = await doctor.findById(req.params.id);
  const a = result.appointments.findIndex({
    appointid: "604eeac8606aed22e002b164",
  });
  res.send(a);
});

Userroute.put("/editprofile/:id", upload.single("file"), (req, res) => {
  const data = {
    city: req.body.city,
    cost: req.body.cost,
    email: req.body.email,
    experience: req.body.experience,
    fullname: req.body.fullname,
    gender: req.body.gender,
    leavestatus: req.body.leavestatus,
    registered: req.body.registered,
    profileimg: req.body.profileimg,
    specialisation: req.body.specialisation,
  };
  res.send(req.file);
  // res.send(data);
  // doctor.findByIdAndUpdate(req.params.id, data).then((r) => {
  //   doctor.findById(req.params.id).then((re) => res.send(re));
  // });
});

Userroute.post("/file/:id", upload.single("image"), (req, res, next) => {
  doctor
    .findByIdAndUpdate(req.params.id, { profileimg: req.file.path })
    .then((r) => res.send(r));
  // console.log(req.file);
  // res.send("success");
});

module.exports = Userroute;
