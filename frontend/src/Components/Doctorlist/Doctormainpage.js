import React, { Component } from "react";
import "./Doctorlist.css";
import Nav3 from "../Navbar/Nav3";
import Navbar from "../Navbar/Navbar";
import Doctorlist from "./Doctorlist";
import Nav2 from "../Navbar/Nav2";
import axios from "axios";
import { Redirect } from "react-router";

const alldoctors = "http://localhost:1111/doctors";

const email = sessionStorage.getItem("email");
class Doctormainpage extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      doctors: "",
      nav3filter: "",
      duplicate: "",
      costfilter: "",
      availabledata: "",
    };
  }

  setcity = (city) => {
    const cities = this.state.maindata.filter((item) => item.city === city);
    this.setState({
      doctors: cities,
      nav3filter: cities,
      availabledata: cities,
    });
    sessionStorage.setItem("specs", "");
    sessionStorage.setItem("gender", "");
    sessionStorage.setItem("cityname", city);
  };
  setspec = (spec) => {
    const specs = this.state.doctors.filter(
      (item) => item.specialisation === spec
    );
    sessionStorage.setItem("specs", spec);
    sessionStorage.setItem("gender", "");
    this.setState({ doctors: specs, nav3filter: specs, availabledata: specs });
  };
  setdefault = async (name) => {
    // console.log("clicked");
    sessionStorage.setItem("cityname", "All cities ");
    sessionStorage.removeItem("specs");
    sessionStorage.removeItem("gender");
    const { data } = await axios.get(`${alldoctors}?email=${email}`);
    this.setState({ doctors: data, nav3filter: data, availabledata: data });
    // console.log(filtered_doctors);
  };
  setgender = async (value) => {
    if (value === "M") {
      sessionStorage.setItem("gender", "Male");
    } else {
      sessionStorage.setItem("gender", "Female");
    }
    const genderdata = this.state.nav3filter.filter(
      (item) => item.gender === value
    );
    this.setState({ doctors: genderdata, duplicate: genderdata });
  };
  setcost = async (cost) => {
    const doctorsdata = this.state.duplicate;
    const costdata = cost.split("-");
    if (costdata[0] === "500") {
      const costfilterdata = doctorsdata.filter((item) => item.cost > 500);
      this.setState({ doctors: costfilterdata });
    } else {
      const costfilterdata = doctorsdata.filter(
        (item) => item.cost >= costdata[0] && item.cost <= costdata[1]
      );
      this.setState({ doctors: costfilterdata });
    }
  };
  setavailable = (value) => {
    const avaliable = this.state.availabledata.filter(
      (item) => item.leavestatus === value
    );
    this.setState({ doctors: avaliable, nav3filter: avaliable });
  };
  render() {
    // console.log("nav3", this.state.nav3filter);

    return (
      <div>
        <Navbar />
        <Nav2
          cityname={(city) => this.setcity(city)}
          specs={(spec) => this.setspec(spec)}
          default={(name) => this.setdefault(name)}
        />
        <Nav3
          genderfilter={(value) => this.setgender(value)}
          costfilter={(cost) => this.setcost(cost)}
          default={(name) => this.setdefault(name)}
          avaliable={(value) => this.setavailable(value)}
        />
        <Doctorlist
          data={{
            doctorsdata: this.state.doctors,
          }}
          clearfilter={() => this.setdefault}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setdefault();
  }
}

export default Doctormainpage;
