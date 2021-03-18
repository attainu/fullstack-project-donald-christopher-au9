import React, { Component } from "react";
import "./Doctorlist.css";
import Nav3 from "../Navbar/Nav3";
import Navbar from "../Navbar/Navbar";
import Doctorlist from "./Doctorlist";
import Nav2 from "../Navbar/Nav2";
import axios from "axios";

const alldoctors = "http://localhost:1111/doctors";

const email = sessionStorage.getItem("email");
class Doctormainpage extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      spec: "",
      doctors: "",
      cities: "",
    };
  }
  // citydata = (city, spec) => {
  //   const cityfilter = this.state.doctors.filter((item) => item.city === city);
  //   const hospitalfilter = cityfilter.filter(
  //     (item) => item.specialisation === spec
  //   );
  //   this.setState({ doctors: hospitalfilter });
  // };
  setcity = (city) => {
    const cities = this.state.doctors.filter((item) => item.city === city);
    this.setState({ doctors: cities, cities: "" });
  };
  setspec = (spec) => {
    if (this.state.cities) {
      const specs = this.state.cities.filter(
        (item) => item.specialisation === spec
      );
      this.setState({ doctors: specs });
    } else {
      const specs = this.state.doctors.filter(
        (item) => item.specialisation === spec
      );
      this.setState({ doctors: specs });
    }
  };
  setdefault = (name) => {
    sessionStorage.removeItem("cityname");
    sessionStorage.removeItem("specs");
    axios.get(`${alldoctors}?email=${email}`).then((r) => {
      this.setState({ doctors: r.data });
      // console.log(r.data)
    });
  };
  setlike = (id) => {};
  render() {
    return (
      <div>
        <Navbar />
        <Nav2
          cityname={(city) => this.setcity(city)}
          specs={(spec) => this.setspec(spec)}
          default={(name) => this.setdefault(name)}
        />
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
    axios.get(`${alldoctors}?email=${email}`).then((r) => {
      this.setState({ doctors: r.data });
    });
  }
}

export default Doctormainpage;
