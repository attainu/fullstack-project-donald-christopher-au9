import React, { Component } from "react";
import "./Doctorlist.css";
import Nav3 from "../Navbar/Nav3";
import Navbar from "../Navbar/Navbar";
import Doctorlist from "./Doctorlist";
import Nav2 from "../Navbar/Nav2";
import axios from "axios";

const alldoctors = "http://localhost:1111/doctors";

class Doctormainpage extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      spec: "",
      doctors: "",
    };
  }
  citydata = (city, spec) => {
    const cityfilter = this.state.doctors.filter((item) => item.city === city);
    const hospitalfilter = cityfilter.filter(
      (item) => item.specialisation === spec
    );
    this.setState({ doctors: hospitalfilter });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Nav2 filtereddata={(city, spec) => this.citydata(city, spec)} />
        <Nav3 />
        <Doctorlist
          data={{
            doctorsdata: this.state.doctors,
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    const email = sessionStorage.getItem("email");
    axios.get(`${alldoctors}?email=${email}`).then((r) => {
      this.setState({ doctors: r.data });
      // console.log(r.data);
    });
  }
}

export default Doctormainpage;
