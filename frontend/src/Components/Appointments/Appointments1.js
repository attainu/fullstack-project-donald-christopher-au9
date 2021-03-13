import axios from "axios";
import { Component } from "react";
import "./Appoint1.css";
const userurl = "http://localhost:1111/doctors/docdata/";
const deleteurl = "http://localhost:1111/user/deleteappointent/";
class Appointments1 extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      role: "",
    };
  }
  deleteappointment = (id) => {
    axios
      .put(`${deleteurl}${this.state.user._id}?id=${id}`)
      .then((r) => console.log(r.data));
  };
  renderappoints = (data) => {
    if (data) {
      return data.map((item) => (
        <div class="card" style={{ width: "18rem", height: "12rem" }}>
          <div class="card-body">
            <div className="card_body">
              <h5 class="card-title">Patientname-{item.patientname}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Slot:- {item.slot.date} || {item.slot.time}
              </h6>
              <p>Problem Related to -{item.specialisation}</p>
            </div>
            <div className="appoint_acpt_button">
              {this.state.role && (
                <button
                  className="btn btn-primary"
                  style={{
                    width: "100px",
                    height: "40px",
                    overflow: "hidden",
                  }}
                >
                  Accept
                </button>
              )}
              <button
                style={{
                  width: "100px",
                  height: "40px",
                  overflow: "hidden",
                }}
                className="btn btn-danger"
                onClick={() => this.deleteappointment(item.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ));
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="bottom_right">
        {this.renderappoints(this.state.user.appointments)}
      </div>
    );
  }
  componentDidMount() {
    const id = sessionStorage.getItem("userid");

    axios.get(`${userurl}${id}`).then((res) => {
      const name = res.data.role.trim();
      if (name === "Doctor") {
        this.setState({ role: name });
      }
      this.setState({ user: res.data });
    });
  }
}
export default Appointments1;
