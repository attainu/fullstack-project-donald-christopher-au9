import "./Datebooking.css";

import React, { Component } from "react";
import { withRouter } from "react-router";

class Datebooking extends Component {
  constructor() {
    super();
    this.state = {
      day: "",
      month: "",
      year: "",
    };
  }
  datehandler = (date) => {
    sessionStorage.setItem("slot_date", date);
  };
  slothamndler = (time) => {
    sessionStorage.setItem("slot_time", time);
    sessionStorage.setItem("appoint_id", this.state.id);
    this.props.history.push(`/confirmappointment/${this.props.id}`);
  };
  render() {
    // console.log(this.state.day);
    return (
      <div
        className="booking_container"
        style={{ display: this.state.visiblity }}
      >
        <div className="booking_top">
          <div className="button1">
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day}/${this.state.month}/${this.state.year}`
                )
              }
            >
              {this.state.day}/{this.state.month}/{this.state.year}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day + 1 <= 30 ? this.state.day + 1 : 1}/${
                    this.state.month
                  }/${this.state.year}`
                )
              }
            >
              {this.state.day + 1 <= 30 ? this.state.day + 1 : 1}/
              {this.state.month}/{this.state.year}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day + 2 <= 30 ? this.state.day + 2 : 2}/${
                    this.state.month
                  }/${this.state.year}`
                )
              }
            >
              {this.state.day + 2 <= 30 ? this.state.day + 2 : 2}/
              {this.state.month}/{this.state.year}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day + 3 <= 30 ? this.state.day + 3 : 3}/${
                    this.state.month
                  }/${this.state.year}`
                )
              }
            >
              {this.state.day + 3 <= 30 ? this.state.day + 3 : 3}/
              {this.state.month}/{this.state.year}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day + 4 <= 30 ? this.state.day + 4 : 4}/${
                    this.state.month
                  }/${this.state.year}`
                )
              }
            >
              {this.state.day + 4 <= 30 ? this.state.day + 4 : 4}/
              {this.state.month}/{this.state.year}
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.datehandler(
                  `${this.state.day + 5 <= 30 ? this.state.day + 5 : 5}/${
                    this.state.month
                  }/${this.state.year}`
                )
              }
            >
              {this.state.day + 5 <= 30 ? this.state.day + 5 : 5}/
              {this.state.month}/{this.state.year}
            </button>
          </div>
        </div>
        <hr />
        <div className="booking_slot">
          <div className="morningblock">
            <div className="morningtext">
              <span>Morning</span>
            </div>
            <div className="Morningslots">
              <button onClick={() => this.slothamndler("10:15AM")}>
                10:15AM
              </button>
              <button onClick={() => this.slothamndler("10:30AM")}>
                10:30AM
              </button>
              <button onClick={() => this.slothamndler("10:45AM")}>
                10:45AM
              </button>
              <button onClick={() => this.slothamndler("11:45AM")}>
                11:45AM
              </button>
            </div>
          </div>
          <hr />
          <div className="afternoonblock">
            <div className="afternoontext">
              <span>Afternoon</span>
            </div>
            <div className="Afternoonslots">
              <button onClick={() => this.slothamndler("12:15AM")}>
                12:15AM
              </button>
              <button onClick={() => this.slothamndler("12:30AM")}>
                12:30AM
              </button>
              <button onClick={() => this.slothamndler("12:45AM")}>
                12:45AM
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.setState({ day, month, year, id: this.props.id });
    // conole.log(day,"-",month,"-",year)
  }
}

export default withRouter(Datebooking);
