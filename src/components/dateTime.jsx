import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "../Style.css";
import "react-datepicker/dist/react-datepicker.css";

class DateTime extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    startTime: "10:00",
    endTime: "10:00",
  };
  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  onStartTimeChange = (startTime) => this.setState({ startTime });
  onEndTimeChange = (endTime) => this.setState({ endTime });
  render() {
    return (
      <div>
        <div className="container">
          <span className="space">Start Date Time</span>
          <TimePicker
            onChange={this.onStartTimeChange}
            value={this.state.startTime}
          />
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}
          />
        </div>
        <div className="container">
          <span className="space">End Date Time</span>
          <TimePicker
            onChange={this.onEndTimeChange}
            value={this.state.endTime}
          />
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}
          />
        </div>
      </div>
    );
  }
}

export default DateTime;
