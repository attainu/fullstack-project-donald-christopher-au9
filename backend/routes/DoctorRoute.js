const express = require("express");
const { rawListeners } = require("../mongomodals/Doctormodal");
const doctor = require("../mongomodals/Doctormodal");
const Doctorroute = express.Router();

Doctorroute.get("/", (req, res) => {
  doctor.find({ role: "Doctor" }).then((result) => res.send(result));
});
Doctorroute.get("/all", (req, res) => {
  doctor.find({}).then((result) => res.send(result));
});

Doctorroute.post("/register", (req, res) => {
  const data = {
    ...req.body,
    email: req.body.email,
    leavestatus: req.body.leavestatus ? req.body.leavestatus : false,
    gender: req.body.gender ? req.body.gender : "M",
    cost: req.body.cost ? req.body.cost : null,
    specialisation: req.body.specialisation ? req.body.specialisation : null,
    profileimg: req.body.profileimg
      ? req.body.profileimg
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7TEM9d91DuHZgbmbtlx4tlSl-FJQKvREDA&usqp=CAU",
    likes: req.body.likes ? req.body.likes : 0,
    slot: req.body.slot ? req.body.slot : "",
    bookingvisible: false,
    experience: req.body.experience ? req.body.experience : 0,
    role: req.body.role,
    registered: req.body.registered ? req.body.registered : false,
  };
  // console.log(data.email)
  doctor.findOne({ email: data.email }).then((result) => {
    // console.log(result)
    if (result) {
      return res.send({
        emailerror: "Exisiting Email address",
        success: "",
      });
    } else {
      const doctordata = new doctor(data);
      doctordata.save().then((e) =>
        res.send({
          emailerror: "",
          success: e,
        })
      );
      // console.log("no")
    }
  });
});

Doctorroute.put("/editlike/:id", (req, res) => {
  doctor.findById(req.params.id).then((result) => {
    doctor
      .findByIdAndUpdate(req.params.id, { likes: result.likes + 1 })
      .then(() => res.send("done"));
  });
});

Doctorroute.post("/login", (req, res) => {
  const data = { ...req.body };
  doctor.findOne({ email: data.email }).then((r) => {
    if (r) {
      doctor.findOne({ _id: r._id, password: data.password }).then((re) => {
        if (re) {
          res.send({ emailerror: "", passworderror: "", result: re });
        } else {
          res.send({
            emailerror: "",
            passworderror: "password doesnot match",
            result: "",
          });
        }
      });
    } else {
      res.send({
        emailerror: "Email doesnt exists",
        passworderror: "",
        result: "",
      });
    }
  });
});

Doctorroute.get("/docdata/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => res.send(r));
});

Doctorroute.put("/doctorbooking/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => {
    doctor
      .findByIdAndUpdate(r.id, { bookingvisible: !r.bookingvisible })
      .then((re) => res.send(re));
  });
});

module.exports = Doctorroute;
