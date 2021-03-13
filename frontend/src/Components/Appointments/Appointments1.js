import React from "react";
import "./Appoint1.css";
const Appointments1 = ({ props }) => {
  const renderappoints = (data) => {
    if (data) {
      return data.map((item) => (
        <div
          class="card"
          style={{ width: "15rem", height: "12rem", border: "1px solid black" }}
        >
          <div class="card-body">
            <div className="card_body">
              <h5 class="card-title">Patientname-{item.patientname}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Slot:- {item.slot.date} || {item.slot.time}
              </h6>
              <p>Problem Related to -{item.specialisation}</p>
            </div>
            <div className="appoint_acpt_button">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-danger">Reject</button>
            </div>
          </div>
        </div>
      ));
    }
  };
  //   console.log(props);
  return (
    <div className="bottom_right">
      {/* <h1>Appointments</h1> */}
      {renderappoints(props.appointments)}
    </div>
  );
};

export default Appointments1;
