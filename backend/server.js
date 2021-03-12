const port = process.env.PORT || 1111;
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const Doctorroute = require("./routes/DoctorRoute");
const facebookroute = require("./routes/facebookroute");
const Userroute = require("./routes/Userroute");
const Cityroute = require("./routes/Cityroute");
require("./Database/mongoose");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(cors());
app.get("/profile", (req, res) => {
  res.send("valid user");
});
app.get("/error", (req, res) => {
  res.send("not valid");
});
app.use("/doctors", Doctorroute);
app.use("/user", Userroute);
app.use("/facebook", facebookroute);
app.use("/city", Cityroute);

app.listen(port, () => console.log(`Server is on ${port}`));
