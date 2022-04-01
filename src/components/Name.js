import React, { Component } from "react";
import action from "../action/action";

class Name extends Component {
  constructor() {
    super();
    this.state = {
      inputData: "",
    };
  }

  sendDataToAction = () => {
    console.log("button clicked");
    action(this.state.inputData);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card-header text-white bg-dark">
              <h1>Name Component</h1>
            </div>
            <div className="card-body d-flex" >
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={(event) => {
                  this.setState({ inputData: event.target.value });
                }}
              />
              <button className="btn btn-primary px-5 mx-2" onClick={this.sendDataToAction}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Name;
