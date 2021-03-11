const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");

Userroute.put("/addappointment/:id", (req, res) => {
  let data = { ...req.body };
  doctor
    .findOneAndUpdate(req.params.id, {
      $push: { appointments: data },
    })
    .then(() =>
      doctor
        .findById(req.params.id)
        .then((r) =>
          res.send({ message: "User appointment confirmed", result: r })
        )
    );
});
Userroute.get("/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => res.send(r));
});
module.exports = Userroute;
