import React, { Component } from "react";
class KP extends Component {
  state = {
    KPCheckbox: false,
    startKP: 0,
    endKP: 0,
  };
  incrementstartKP = () => {
    this.setState({
      startKP: this.state.startKP + 1,
    });
  };

  decrementstartKP = () => {
    this.setState({
      startKP: this.state.startKP - 1,
    });
  };
  incrementendKP = () => {
    this.setState({
      endKP: this.state.endKP + 1,
    });
  };

  decrementendKP = () => {
    this.setState({
      endKP: this.state.endKP - 1,
    });
  };

  reset = () => {
    this.setState({
      endKP: 0,
    });
  };
  handleCheckboxChange = () => {
    this.setState({ KPCheckbox: true });
  };
  render() {
    return (
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.KPCheckbox}
              onChange={this.handleCheckboxChange}
            />
            filter by KPS
          </label>
        </div>
        <div> KP </div>

        <div>
          <span>start KP</span>
          <span>{this.state.startKP}</span>

          <div>
            <button className="inc" onClick={this.incrementstartKP}>
              Increment!
            </button>

            <button className="dec" onClick={this.decrementstartKP}>
              Decrement!
            </button>
          </div>
        </div>
        <div>
          <span>end KP</span>
          <span>{this.state.endKP}</span>

          <div>
            <button className="inc" onClick={this.incrementendKP}>
              Increment!
            </button>

            <button className="dec" onClick={this.decrementendKP}>
              Decrement!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default KP;
