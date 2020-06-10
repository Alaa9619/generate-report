import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./logo.svg";
import "./Style.css";
import { useAlert } from "react-alert";

class App extends Component {
  constructor() {
    // ...
    super();
    this.handleFileFormatChange = this.handleFileFormatChange.bind(this);
    this.handleKpValueChange = this.handleKpValueChange.bind(this);
    this.handleEndKpValueChange = this.handleEndKpValueChange.bind(this);
    this.state = {
      KPCheckbox: false,
      KpDisapled: true,
      attachImageCheckbox: false,
      listEventCheckbox: false,
      dateTimeCheckbox: false,
      dateTimeDisapled: true,
      startKP: 0,
      endKP: 0,
      startDate: new Date(),
      endDate: new Date(),
      startTime: "00:00",
      endTime: "00:00",
      outPutFileFormat: "word",
      KpcontainerStyle: "containerHide",
      dateTimecontainerStyle: "containerHide",
      KpAlert: null,
      dateTimeAlert: null,
      startKpStyle: "form-control",
      startKpHint: null,
      startKpHintStyle: null,
      startDateTimeHint: null,
      startDateTimeHintStyle: null,
    };
  }
  returnJson() {
    let Json = {
      outPutFileFormat: this.state.outPutFileFormat,
      attachImageCheckbox: this.state.attachImageCheckbox,
      listEventCheckbox: this.state.listEventCheckbox,
      KPCheckbox: this.state.KPCheckbox,
      dateTimeCheckbox: this.state.dateTimeCheckbox,
      startDate: this.state.startDate,
      endKP: this.state.endKP,
      startDate: this.state.startDate,
      endKP: this.state.endKP,
    };
    if (this.state.KPCheckbox == true) {
      Json = {
        ...Json,
        ...{ startKP: this.state.startKP },
        ...{ endKP: this.state.endKP },
      };
    }
    if (this.state.dateTimeCheckbox == true) {
      Json = {
        ...Json,
        ...{ startDate: this.state.startDate },
        ...{ endDate: this.state.endDate },
      };
    }

    return JSON.stringify(Json);
  }

  incrementstartKP = () => {
    this.setState({
      startKP: parseInt(this.state.startKP) + 1,
    });
  };
  decrementstartKP = () => {
    if (this.state.startKP > 0)
      this.setState({
        startKP: parseInt(this.state.startKP) - 1,
      });
  };
  incrementendKP = () => {
    this.setState({
      endKP: parseInt(this.state.endKP) + 1,
    });
  };

  decrementendKP = () => {
    if (this.state.endKP > 0)
      this.setState({
        endKP: parseInt(this.state.endKP) - 1,
      });
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
  handleFileFormatChange(event) {
    this.setState({
      outPutFileFormat: event.target.value,
    });
  }
  onStartTimeChange = (startTime) => this.setState({ startTime });
  onEndTimeChange = (endTime) => this.setState({ endTime });
  handleKpCheckboxChange = () => {
    if (this.state.KPCheckbox) {
      this.setState({
        KPCheckbox: false,
        KpDisapled: true,
        KpcontainerStyle: "containerHide",
      });
    } else {
      this.setState({
        KPCheckbox: true,
        KpDisapled: false,
        KpcontainerStyle: "container",
      });
    }
  };
  handleDateTimeCheckboxChange = () => {
    if (this.state.dateTimeCheckbox) {
      this.setState({
        dateTimeCheckbox: false,
        dateTimeDisapled: true,
        dateTimecontainerStyle: "containerHide",
      });
    } else {
      this.setState({
        dateTimeCheckbox: true,
        dateTimeDisapled: false,
        dateTimecontainerStyle: "container",
      });
    }
  };
  handleAttachImageCheckboxChang = () => {
    if (this.state.attachImageCheckbox) {
      this.setState({
        attachImageCheckbox: false,
      });
    } else {
      this.setState({
        attachImageCheckbox: true,
      });
    }
  };
  handleListEventsCheckboxChange = () => {
    if (this.state.listEventCheckbox) {
      this.setState({
        listEventCheckbox: false,
      });
    } else {
      this.setState({
        listEventCheckbox: true,
      });
    }
  };
  handleOnSubmit = () => {
    if (this.state.KPCheckbox == true) {
      if (this.state.startKP === this.state.endKP) {
        this.setState({ startKpStyle: "form-control is-invalid" });

        this.setState({
          startKpHint: "start kp shouldn't be equal end kp",
        });
        this.setState({
          startKpHintStyle: "invalid-feedback",
        });
      } else if (this.state.startKP > this.state.endKP) {
        this.setState({ startKpStyle: "form-control is-invalid" });

        this.setState({
          startKpHint: "end kp should be greater than start kp",
        });
        this.setState({
          startKpHintStyle: "invalid-feedback",
        });
      }
    }
    if (this.state.dateTimeCheckbox == true) {
      if (this.state.startTime === this.state.endTime) {
        this.setState({
          startDateTimeHint: "  start time shouldn't be equal end time !",
        });
        this.setState({
          startDateTimeHintStyle: "dateTimeError",
        });
      } else if (this.state.startTime > this.state.endTime) {
        this.setState({
          startDateTimeHint: "  end time should be greater than start time !",
        });
        this.setState({
          startDateTimeHintStyle: "dateTimeError",
        });
      }
    }
    if (
      this.state.startDateTimeHint === null &&
      this.state.startKpHint === null
    ) {
      console.log(this.returnJson());
    }
    // if (this.state.KPCheckbox == true) {
    //   if (this.state.startKP === this.state.endKP) {
    //     this.setState({
    //       KpAlert: (
    //         <div className="alert alert-danger" role="alert">
    //           start kp shouldn't be equal end kp
    //         </div>
    //       ),
    //     });
    //   } else if (this.state.startKP > this.state.endKP) {
    //     this.setState({
    //       KpAlert: (
    //         <div className="alert alert-danger" role="alert">
    //           start kp shouldn't be bigger than end kp
    //         </div>
    //       ),
    //     });
    //   } else {
    //     this.setState({
    //       KpAlert: (
    //         <div className="alert alert-success" role="alert">
    //           Looks Good!
    //         </div>
    //       ),
    //     });
    //     // alert(this.returnJson());
    //   }
    // }
    // if (this.state.dateTimeCheckbox == true) {
    //   if (this.state.startTime === this.state.endTime) {
    //     this.setState({
    //       dateTimeAlert: (
    //         <div className="alert alert-danger" role="alert">
    //           both start and end Time are equal
    //         </div>
    //       ),
    //     });
    //   } else if (this.state.startTime > this.state.endTime) {
    //     this.setState({
    //       dateTimeAlert: (
    //         <div className="alert alert-danger" role="alert">
    //           start date shouldn't be bigger than end Time
    //         </div>
    //       ),
    //     });
    //   } else {
    //     this.setState({
    //       dateTimeAlert: (
    //         <div className="alert alert-success" role="alert">
    //           Looks Good!
    //         </div>
    //       ),
    //     });
    //     //  alert(this.returnJson());
    //   }
    // }
    // if (
    //   this.state.startTime < this.state.endTime &&
    //   this.state.startKP < this.state.endKP
    // ) {
    //   alert(this.returnJson());
    // }
    // alert(this.returnJson());
  };
  handleKpValueChange(event) {
    this.setState({ startKP: event.target.value });
  }
  handleEndKpValueChange(event) {
    this.setState({ endKP: event.target.value });
  }
  render() {
    return (
      <div className="selection-criterias">
        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.KPCheckbox}
              onChange={this.handleKpCheckboxChange}
            />
            filter by KPS
          </label>
        </div>
        <div>
          <b> KP </b>
        </div>

        <div className="container">
          <div className="kp-container">
            <span className="space" style={{ width: 150 }}>
              start KP
            </span>
            <span className="space">
              <input
                required={true}
                type="text"
                className={this.state.startKpStyle}
                id="kp"
                style={{ width: 200 }}
                value={this.state.startKP}
                onChange={this.handleKpValueChange}
                disabled={this.state.KpDisapled}
              ></input>
              <div className={this.state.startKpHintStyle}>
                {this.state.startKpHint}
              </div>
            </span>

            <div className="buttons-container">
              <button
                className="btn btn-outline-secondary"
                onClick={this.incrementstartKP}
                disabled={this.state.KpDisapled}
                style={({ width: "auto" }, { height: "auto" })}
              >
                <b>+</b>
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={this.decrementstartKP}
                disabled={this.state.KpDisapled}
                style={({ width: "auto" }, { height: "auto" })}
              >
                <b>-</b>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="kp-container">
            <span className="space" style={{ width: 150 }}>
              end KP
            </span>

            <span className="space">
              <input
                required={true}
                type="text"
                id="kpend"
                style={{ width: 200 }}
                className="form-control"
                value={this.state.endKP}
                onChange={this.handleEndKpValueChange}
                disabled={this.state.KpDisapled}
              ></input>
            </span>

            <div className="buttons-container">
              <button
                className="btn btn-outline-secondary"
                disabled={this.state.KpDisapled}
                onClick={this.incrementendKP}
                style={({ width: "auto" }, { height: "auto" })}
              >
                <b>+</b>
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={this.decrementendKP}
                disabled={this.state.KpDisapled}
                style={({ width: "auto" }, { height: "auto" })}
              >
                <b>-</b>
              </button>
            </div>
          </div>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.dateTimeCheckbox}
              onChange={this.handleDateTimeCheckboxChange}
            />
            filter by Date Time
          </label>
        </div>

        <div>
          <b> Date Time</b>
        </div>
        <div className="container">
          <span className="space" style={{ width: 150 }}>
            Start Date Time
          </span>
          <div>
            <TimePicker
              disabled={this.state.dateTimeDisapled}
              onChange={this.onStartTimeChange}
              value={this.state.startTime}
              isOpen={false}
              disableClock={true}
            />

            <DatePicker
              disabled={this.state.dateTimeDisapled}
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
            />
            <span className={this.state.startDateTimeHintStyle}>
              {this.state.startDateTimeHint}
            </span>
          </div>
        </div>
        <div className="container">
          <span className="space" style={{ width: 150 }}>
            End Date Time
          </span>
          <TimePicker
            disabled={this.state.dateTimeDisapled}
            onChange={this.onEndTimeChange}
            value={this.state.endTime}
            isOpen={false}
            disableClock={true}
          />
          <DatePicker
            disabled={this.state.dateTimeDisapled}
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}
          />
        </div>

        <div> Optional Selection </div>
        <div className="options">
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.attachImageCheckbox}
              onChange={this.handleAttachImageCheckboxChang}
            />
            Attach Image
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.listEventCheckbox}
              onChange={this.handleListEventsCheckboxChange}
            />
            List Event
          </label>
        </div>
        <div> Output File Format </div>
        <div className="options">
          <label>
            <input
              type="radio"
              value="word"
              checked={this.state.outPutFileFormat === "word"}
              onChange={this.handleFileFormatChange}
            />
            Word
          </label>
          <label>
            <input
              type="radio"
              value="pdf"
              checked={this.state.outPutFileFormat === "pdf"}
              onChange={this.handleFileFormatChange}
            />
            Pdf
          </label>
        </div>

        <button
          className="btn btn-primary btn-lg btn-block"
          style={({ width: "auto" }, { height: "auto" })}
          onClick={this.handleOnSubmit}
        >
          Generate A report
        </button>
      </div>
    );
  }
}

export default App;
