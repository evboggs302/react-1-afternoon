import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArr: [
        { name: "John", age: 25 },
        { name: "Nick", age: 25, hobby: "ball is life" }
      ],
      userInput: "",
      filteredArr: []
    };
  }

  update(value) {
    this.setState({ userInput: value });
  }

  solve(prop) {
    let bro = this.state.unfilteredArr;
    let filteredArr = [];

    for (let i = 0; i < bro.length; i++) {
      console.log("bro " + bro);
      console.log("prop " + prop);
      if (bro[i].hasOwnProperty(prop)) {
        filteredArr.push(bro[i]);
      } else {
        console.log(bro[i].prop + " doesnt equal " + prop);
      }
    }
    this.setState({ filteredArr: filteredArr });
  }

  render() {
    console.log(this.state.unfilteredArr);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unfilteredArr, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={event => this.update(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.solve(this.state.userInput)}
        >
          Button
        </button>
        <span className="resultsBox filterObjectRB">
          New: {JSON.stringify(this.state.filteredArr, null, 10)}
        </span>
      </div>
    );
  }
}
