import axios from "axios";
import React, { Component } from "react";
import "./confirmappoint.css";
import Loginpage from "../Registerpage/Loginpage";
import Smallnav from "./Smallnav";
const docdata = "http://localhost:1111/doctors/docdata";
const addappintment = "http://localhost:1111/user/addappointment";
class Confirmappointment extends Component {
  constructor() {
    super();
    this.state = {
      doctor: "",
      doctorname: "",
      doctorid: "",
      userid: sessionStorage.getItem("userid"),
      fullname: sessionStorage.getItem("username"),
      email: sessionStorage.getItem("email"),
      patientname: "",
      confirmationmsg: "",
      slot: "",
      doctorimg: "",
      specialisation: "",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submithandler = () => {
    // console.log(this.state)
    axios
      .put(`${addappintment}/${this.state.userid}`, this.state)
      .then((res) => {
        // console.log(res.data)
        this.setState({ confirmationmsg: res.data.confirmationmsg });
        setTimeout(() => {
          this.props.history.push("/doctorlist");
        }, 2000);
      });
  };
  renderdata = (data) => {
    if (data) {
      return (
        <div className="confirmappoint_container">
          <Smallnav />
          <div className="confirm_container">
            <div className="confirminfo">
              <div className="confirm_top">
                <span>In-clinic Appointments</span>
              </div>
              <hr />
              <div className="confirm_dateinfo">
                <span>Date:-{sessionStorage.getItem("slot_date")}</span>
                <span>Time:-{sessionStorage.getItem("slot_time")}</span>
              </div>
              <hr />
              <div className="confirm_docinfo">
                <div id="doctorimg">
                  <img src={this.state.doctor.profileimg} alt=""></img>
                </div>
                <div id="Doctor_card_info">
                  <div id="Doctor_name">
                    <span>{this.state.doctor.fullname}</span>
                  </div>
                  <div
                    className="Doctor_specilisation"
                    id="Doctor_specilisation_text"
                  >
                    <span>{this.state.doctor.specialisation}</span>
                  </div>
                  <div
                    className="Doctor_experience"
                    id="Doctor_specilisation_text"
                  >
                    <span>
                      {this.state.doctor.experience} years of experience overall
                    </span>
                  </div>

                  <div
                    className="Doctor_hospital_fee"
                    id="Doctor_specilisation_text"
                  >
                    <span>
                      {this.state.doctor.cost}₹ Cosultation fee at clinic
                    </span>
                  </div>
                  <div
                    className="Doctor_hospital_fee"
                    id="Doctor_specilisation_text"
                  >
                    <span>
                      {this.state.doctor.specialisation}-
                      <span>specialisation</span>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="Doctor_hospital_name" id="hospital_name">
                <strong style={{ marginRight: "8px" }}>
                  {this.state.doctor.hospitalname} .
                </strong>
                {this.state.doctor.city}
              </div>
            </div>
            <div className="Confirm_details">
              {this.state.fullname && (
                <div className="confirmdetails_inputs">
                  <div className="patientinfo_top">
                    <span>Patient Details</span>
                    <p>This in-clinic appointment is for:</p>
                  </div>
                  <div>
                    <div
                      className="patient_inputs"
                      onChange={this.changehandler}
                    >
                      <input
                        type="radio"
                        name="patientname"
                        value={sessionStorage.getItem("username")}
                      />
                      {sessionStorage.getItem("username") && (
                        <label>{sessionStorage.getItem("username")}</label>
                      )}
                    </div>
                    <div
                      className="patient_inputs"
                      onChange={this.changehandler}
                    >
                      <input
                        type="radio"
                        name="patientname"
                        value="Someone Else"
                      />
                      <label>Someone Else</label>
                    </div>
                  </div>
                  <div className="patientinfo_top" id="provide_info">
                    <p>
                      Please provide following information about Alfred
                      Richards:
                    </p>
                  </div>
                  <div className="Patient_info_inputs">
                    <span>Full Name</span>
                    <input
                      value={this.state.fullname}
                      placeholder={this.state.fullname}
                      disabled
                    />
                  </div>
                  <div className="Patient_info_inputs">
                    <span>Email</span>
                    <input
                      value={this.state.email}
                      placeholder={this.state.email}
                      disabled
                    />
                  </div>
                  <div className="paitent_whatsapp_check">
                    <input type="checkbox" />
                    <span>Get updates in whatsapp number 8886833905</span>
                  </div>
                  <div className="patientinfo_button">
                    <button onClick={this.submithandler}>Confirm</button>
                  </div>
                </div>
              )}
              {!this.state.fullname && <Loginpage />}
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    // console.log(this.state);
    if (!sessionStorage.getItem("slot_date")) {
      this.props.history.push(`/doctorlist`);
    }
    return (
      <div className="Main_confirm_container">
        {this.renderdata(this.state.doctor)}
        {this.state.confirmationmsg && (
          <div className="confirm_img">
            <img
              src="https://aogdesign.com.au/wp-content/uploads/2019/02/checkmark.gif"
              alt="/"
            />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(id);
    axios.get(`${docdata}/${id}`).then((res) =>
      this.setState({
        doctor: res.data,
        doctorid: res.data._id,
        doctorname: res.data.fullname,
        slot: {
          time: sessionStorage.getItem("slot_time"),
          date: sessionStorage.getItem("slot_date"),
        },
        doctorimg: res.data.profileimg,
        specialisation: res.data.specialisation,
      })
    );
  }
  componentWillUnmount() {
    sessionStorage.removeItem("slot_time");
    sessionStorage.removeItem("slot_date");
  }
}

export default Confirmappointment;
