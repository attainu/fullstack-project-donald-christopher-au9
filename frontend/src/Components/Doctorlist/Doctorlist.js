import React, { Component } from "react";
import "./Doctorlist.css";
import Nav3 from "../Navbar/Nav3";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Datebooking from "./Datebooking";
const alldoctors = "http://localhost:1111/doctors";
const likeurl = "http://localhost:1111/doctors/editlike/";
const bookingvisible = "http://localhost:1111/doctors/doctorbooking/";

class Doctorlist extends Component {
  constructor() {
    super();
    this.state = {
      doctors: "",
      position: "",
    };
  }
  likehandler = (id) => {
    axios
      .put(`${likeurl}${id}`)
      .then(() =>
        axios
          .get(alldoctors)
          .then((res) => this.setState({ doctors: res.data }))
      );
  };
  appointmenthandler = (value, id) => {
    // console.log(ans)
    axios.put(`${bookingvisible}${id}`).then(() =>
      axios.get(alldoctors).then((res) =>
        this.setState({
          doctors: res.data,
        })
      )
    );
  };
  renderdoctors = (data) => {
    if (data) {
      return data.map((doctor) => (
        <div>
          <div className="Doctor_card">
            <div className="doctorimg">
              <img src={doctor.profileimg} alt=""></img>
            </div>
            <div className="Doctor_card_info">
              <div className="Doctor_name">
                <span>{doctor.fullname}</span>
              </div>
              <div
                className="Doctor_specilisation"
                id="Doctor_specilisation_text"
              >
                <span>{doctor.specialisation}</span>
              </div>
              <div className="Doctor_experience" id="Doctor_specilisation_text">
                <span>{doctor.experience} years of experience overall</span>
              </div>
              <div
                className="Doctor_hospital_name"
                id="Doctor_specilisation_text"
              >
                <strong style={{ marginRight: "8px" }}>
                  {doctor.hospitalname} .
                </strong>
                {doctor.city}
              </div>
              <div
                className="Doctor_hospital_fee"
                id="Doctor_specilisation_text"
              >
                <span>{doctor.cost}₹ Cosultation fee at clinic</span>
              </div>
              <div
                className="Doctor_hospital_fee"
                id="Doctor_specilisation_text"
              >
                <span>
                  {doctor.specialisation}
                  <span>specialisation</span>
                </span>
              </div>
              <hr />
              <div className="Doctor_card_stories">
                <button onClick={() => this.likehandler(doctor._id)}>
                  {doctor.likes}Likes
                </button>
                <span>Patient stories</span>
              </div>
            </div>
            <div div className="Doctor_card_buttons">
              <div className="Doctor_card_button_avaliable">
                {!doctor.leavestatus && <span>Available</span>}
                {doctor.leavestatus && <span>not Available</span>}
              </div>
              <div className="Doctor_card_button_appoint">
                {doctor.leavestatus && (
                  <button
                    id="appointment"
                    style={{ backgroundColor: "skyblue" }}
                    disabled
                  >
                    Book appointment
                  </button>
                )}
                {!doctor.leavestatus && (
                  <button
                    id="appointment"
                    style={{ backgroundColor: "#14bef0" }}
                    onClick={() =>
                      this.appointmenthandler(doctor.bookingvisible, doctor._id)
                    }
                  >
                    Book appointment
                  </button>
                )}
                <button id="video">Video Consult</button>
              </div>
            </div>
          </div>
          {doctor.bookingvisible && (
            <div>
              <Datebooking id={doctor._id} />
            </div>
          )}
        </div>
      ));
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <Nav3 />
        <div className="Doctorlist_main_container">
          <div className="Doctorlist_container">
            <div className="Doctorlist_container_text">
              <div className="doctor_card_header">
                <span>
                  Book from 109 cosmetic/aesthetic dentist in Bangalore
                </span>
                <p>With predicted wait-time & verified details</p>
              </div>
              {this.renderdoctors(this.state.doctors)}
            </div>
          </div>
          <div
            className="doctor_rightside"
            style={{ position: this.state.position }}
          >
            <img
              src="https://www.practostatic.com/web-assets/images/maps/bangalore.f18ea957144c.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get(alldoctors).then((res) => this.setState({ doctors: res.data }));
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.setState({ position: "fixed" });
      } else {
        this.setState({ position: "relative" });
      }
    });

    // console.log(height)
  }
}

export default Doctorlist;
